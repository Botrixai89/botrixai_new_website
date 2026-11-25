"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { BRAND, clamp01, lerp, mouseState, ramp, scrollState } from "../state";
import { applyPresence, seeded } from "./objects";

/* 03 — "Your AI workforce": a lead Botrix bot that watches the cursor, with a
   squad of mini bots assembling into formation behind it as you scroll.      */

const COLS = 17;
const ROWS = 5;
const N = COLS * ROWS;

const green = new THREE.Color(BRAND.signal);
const greenDim = new THREE.Color("#0c3a20");

function LeadBot() {
  const root = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);
  const eyes = useRef<THREE.Group>(null!);
  const halo = useRef<THREE.Mesh>(null!);
  const geo = useMemo(
    () => ({
      head: new RoundedBoxGeometry(1.9, 1.45, 1.35, 6, 0.42),
      visor: new RoundedBoxGeometry(1.5, 0.95, 0.12, 4, 0.3),
      eye: new RoundedBoxGeometry(0.24, 0.42, 0.06, 4, 0.11),
    }),
    [],
  );

  useFrame((state, dt) => {
    const p = scrollState.current;
    const t = state.clock.elapsedTime;
    const e = ramp(0.68, 0.88, p);
    root.current.position.set(0, lerp(-4, 0.62, e), lerp(-6, 0, e));
    applyPresence(root.current, 0.66 * e);
    if (!root.current.visible) return;

    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, mouseState.x * 0.55, 3, dt);
    head.current.rotation.x = THREE.MathUtils.damp(
      head.current.rotation.x,
      -mouseState.y * 0.3 + Math.sin(t * 0.8) * 0.04,
      3,
      dt,
    );
    head.current.position.y = Math.sin(t * 1.2) * 0.08;
    const blink = t % 3.7 < 0.14 ? 0.08 : 1;
    eyes.current.scale.y = THREE.MathUtils.damp(eyes.current.scale.y, blink, 30, dt);
    halo.current.scale.setScalar(1 + Math.sin(t * 2) * 0.04);
  });

  return (
    <group ref={root}>
      <group ref={head}>
        <mesh geometry={geo.head}>
          <meshPhysicalMaterial color={BRAND.ink} metalness={0.85} roughness={0.22} clearcoat={1} clearcoatRoughness={0.1} />
        </mesh>
        <mesh geometry={geo.visor} position={[0, 0, 0.66]}>
          <meshPhysicalMaterial color="#000" metalness={0.3} roughness={0.05} clearcoat={1} />
        </mesh>
        <group ref={eyes} position={[0, 0.02, 0.74]}>
          {[-0.34, 0.34].map((x) => (
            <mesh key={x} geometry={geo.eye} position={[x, 0, 0]}>
              <meshBasicMaterial color={green} toneMapped={false} />
            </mesh>
          ))}
        </group>
        {/* antenna */}
        <mesh position={[0, 0.95, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.42, 12]} />
          <meshStandardMaterial color={BRAND.bone} metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshBasicMaterial color={green} toneMapped={false} />
        </mesh>
        {/* ears */}
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 0.98, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh>
              <cylinderGeometry args={[0.24, 0.24, 0.14, 32]} />
              <meshStandardMaterial color={BRAND.bone} metalness={0.9} roughness={0.3} />
            </mesh>
            <mesh position={[0, s * 0.075, 0]}>
              <torusGeometry args={[0.14, 0.022, 8, 32]} />
              <meshBasicMaterial color={green} toneMapped={false} />
            </mesh>
          </group>
        ))}
      </group>
      {/* hover halo */}
      <mesh ref={halo} position={[0, -1.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.012, 8, 96]} />
        <meshBasicMaterial color={green} toneMapped={false} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function Squad() {
  const root = useRef<THREE.Group>(null!);
  const heads = useRef<THREE.InstancedMesh>(null!);
  const eyes = useRef<THREE.InstancedMesh>(null!);

  const data = useMemo(() => {
    const rand = seeded(23);
    const R = 10;
    return Array.from({ length: N }, (_, i) => {
      const c = i % COLS;
      const r = Math.floor(i / COLS);
      const a = lerp(-1.15, 1.15, c / (COLS - 1));
      const form = new THREE.Vector3(Math.sin(a) * R, -0.55 + r * 0.95, -Math.cos(a) * R + R - 5.5);
      const scatter = form
        .clone()
        .add(new THREE.Vector3((rand() - 0.5) * 18, 3 + rand() * 9, -14 - rand() * 8));
      return { c, r, a, form, scatter, delay: rand() * 0.5, spin: (rand() - 0.5) * 6, blinkAt: rand() * 5 };
    });
  }, []);

  const geo = useMemo(
    () => ({
      head: new RoundedBoxGeometry(1, 0.76, 0.72, 3, 0.22),
      eye: new RoundedBoxGeometry(0.13, 0.24, 0.04, 2, 0.06),
    }),
    [],
  );
  const tmp = useMemo(
    () => ({
      o: new THREE.Object3D(),
      m: new THREE.Matrix4(),
      eye: new THREE.Matrix4(),
      pos: new THREE.Vector3(),
      q: new THREE.Quaternion(),
      s: new THREE.Vector3(),
      col: new THREE.Color(),
    }),
    [],
  );

  // Allocate per-instance colours before the first frame so the shader compiles with them.
  useLayoutEffect(() => {
    for (let i = 0; i < N * 2; i++) eyes.current.setColorAt(i, greenDim);
  }, []);

  useFrame((state) => {
    const p = scrollState.current;
    const t = state.clock.elapsedTime;
    const enter = ramp(0.64, 0.97, p);
    root.current.position.set(0, 0, 0);
    applyPresence(root.current, enter > 0.001 ? 1 : 0);
    if (!root.current.visible) return;

    const { o, m, eye, pos, q, s, col } = tmp;
    data.forEach((b, i) => {
      const local = clamp01((enter - b.delay) / (1 - b.delay));
      const k = 1 - Math.pow(1 - local, 3);
      o.position.lerpVectors(b.scatter, b.form, k);
      o.position.y += Math.sin(t * 2.2 - b.c * 0.45 + b.r * 0.4) * 0.09 * k;
      o.rotation.set((1 - k) * 2.4, -b.a + (1 - k) * b.spin, 0);
      o.scale.setScalar(0.55 * k + 0.0001);
      o.updateMatrix();
      heads.current.setMatrixAt(i, o.matrix);

      const blink = (t + b.blinkAt) % 5 < 0.12 ? 0.1 : 1;
      [-0.2, 0.2].forEach((x, e) => {
        pos.set(x, 0.03, 0.37);
        s.set(1, blink, 1);
        eye.compose(pos, q, s);
        m.multiplyMatrices(o.matrix, eye);
        eyes.current.setMatrixAt(i * 2 + e, m);
        // a stadium wave of "thinking" light across the formation
        const wave = 0.5 + 0.5 * Math.sin(t * 3 - b.c * 0.55 - b.r * 0.35);
        col.copy(greenDim).lerp(green, wave * wave);
        eyes.current.setColorAt(i * 2 + e, col);
      });
    });
    heads.current.instanceMatrix.needsUpdate = true;
    eyes.current.instanceMatrix.needsUpdate = true;
    if (eyes.current.instanceColor) eyes.current.instanceColor.needsUpdate = true;
  });

  return (
    <group ref={root}>
      <instancedMesh ref={heads} args={[geo.head, undefined, N]} frustumCulled={false}>
        <meshPhysicalMaterial color={BRAND.ink} metalness={0.85} roughness={0.25} clearcoat={1} clearcoatRoughness={0.15} />
      </instancedMesh>
      <instancedMesh ref={eyes} args={[geo.eye, undefined, N * 2]} frustumCulled={false}>
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  );
}

export function BotSquad() {
  return (
    <>
      <Squad />
      <LeadBot />
    </>
  );
}
