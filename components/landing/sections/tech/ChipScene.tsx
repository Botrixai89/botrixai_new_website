"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { BRAND, mouseState } from "../../hero/state";
import { seeded } from "../../hero/scene/objects";

import { techState } from "./techState";

const green = new THREE.Color(BRAND.signal);
const PULSES = 48;

/** PCB traces leaving each side of the chip: out, a 45° jog, then out again. */
function useTraces() {
  return useMemo(() => {
    const rand = seeded(11);
    const polylines: THREE.Vector3[][] = [];
    const sides = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    sides.forEach(([sx, sz]) => {
      for (let k = 0; k < 8; k++) {
        const off = -0.85 + (k / 7) * 1.7;
        const start = new THREE.Vector3(sx ? sx * 1.25 : off, 0, sz ? sz * 1.25 : off);
        const l1 = 0.4 + rand() * 0.6;
        const jog = (rand() - 0.5) * 1.2;
        const a = start.clone().add(new THREE.Vector3(sx * l1, 0, sz * l1));
        const b = a.clone().add(new THREE.Vector3(sx * Math.abs(jog) + (sz ? jog : 0), 0, sz * Math.abs(jog) + (sx ? jog : 0)));
        const l2 = 0.8 + rand() * 1.6;
        const c = b.clone().add(new THREE.Vector3(sx * l2, 0, sz * l2));
        polylines.push([start, a, b, c]);
      }
    });
    const seg: number[] = [];
    polylines.forEach((pl) => {
      for (let i = 0; i < pl.length - 1; i++) seg.push(...pl[i].toArray(), ...pl[i + 1].toArray());
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(seg, 3));
    const ends = polylines.map((pl) => pl[pl.length - 1]);
    const pulses = Array.from({ length: PULSES }, () => ({ line: Math.floor(rand() * polylines.length), t: rand(), speed: 0.3 + rand() * 0.5 }));
    return { polylines, geo, ends, pulses };
  }, []);
}

function pointOnPolyline(pl: THREE.Vector3[], t: number, out: THREE.Vector3) {
  const lens = pl.slice(1).map((p, i) => p.distanceTo(pl[i]));
  const total = lens.reduce((a, b) => a + b, 0);
  let d = t * total;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i]) return out.lerpVectors(pl[i], pl[i + 1], d / lens[i]);
    d -= lens[i];
  }
  return out.copy(pl[pl.length - 1]);
}

function Chip() {
  const root = useRef<THREE.Group>(null!);
  const pulseMesh = useRef<THREE.InstancedMesh>(null!);
  const traceMat = useRef<THREE.LineBasicMaterial>(null!);
  const dome = useRef<THREE.MeshBasicMaterial>(null!);
  const eyes = useRef<THREE.Group>(null!);
  const { polylines, geo, ends, pulses } = useTraces();
  const tmp = useMemo(() => ({ o: new THREE.Object3D(), v: new THREE.Vector3() }), []);
  const g = useMemo(
    () => ({
      base: new RoundedBoxGeometry(2.5, 0.28, 2.5, 4, 0.08),
      die: new RoundedBoxGeometry(1.45, 0.14, 1.45, 4, 0.06),
      eye: new RoundedBoxGeometry(0.2, 0.05, 0.36, 3, 0.08),
    }),
    [],
  );
  const pins = useMemo(() => {
    const out: [number, number, number, number][] = [];
    for (let k = 0; k < 10; k++) {
      const off = -1.0 + (k / 9) * 2.0;
      out.push([1.33, 0, off, 0], [-1.33, 0, off, 0], [off, 0, 1.33, Math.PI / 2], [off, 0, -1.33, Math.PI / 2]);
    }
    return out;
  }, []);

  useFrame((state, dt) => {
    const a = techState.active;
    const t = state.clock.elapsedTime;
    const targetY = a * (Math.PI / 2) * 0.5 + t * 0.05;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, targetY + mouseState.x * 0.35, 2.5, dt);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, -mouseState.y * 0.15, 2.5, dt);
    root.current.position.y = Math.sin(t * 0.9) * 0.06;

    traceMat.current.opacity = THREE.MathUtils.damp(traceMat.current.opacity, a === 1 ? 0.75 : 0.32, 3, dt);
    dome.current.opacity = THREE.MathUtils.damp(dome.current.opacity, a === 3 ? 0.35 : 0, 3, dt);
    const eyeGlow = a === 0 ? 1.25 + Math.sin(t * 6) * 0.15 : 1;
    eyes.current.scale.set(eyeGlow, 1, eyeGlow);

    const speedMul = a === 2 ? 2.4 : a === 1 ? 1.4 : 1;
    pulses.forEach((p, i) => {
      p.t += dt * p.speed * speedMul;
      if (p.t > 1) {
        p.t = 0;
        p.line = (p.line + 7) % polylines.length;
      }
      pointOnPolyline(polylines[p.line], p.t, tmp.v);
      tmp.o.position.copy(tmp.v);
      tmp.o.scale.setScalar(Math.sin(p.t * Math.PI) + 0.15);
      tmp.o.updateMatrix();
      pulseMesh.current.setMatrixAt(i, tmp.o.matrix);
    });
    pulseMesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={root}>
      {/* traces */}
      <lineSegments geometry={geo} position={[0, -0.13, 0]}>
        <lineBasicMaterial ref={traceMat} color={green} transparent opacity={0.32} toneMapped={false} />
      </lineSegments>
      {ends.map((e, i) => (
        <mesh key={i} position={[e.x, -0.13, e.z]}>
          <circleGeometry args={[0.045, 16]} />
          <meshBasicMaterial color={BRAND.bone} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <instancedMesh ref={pulseMesh} args={[undefined, undefined, PULSES]} position={[0, -0.13, 0]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color={green} toneMapped={false} />
      </instancedMesh>

      {/* package + pins */}
      <mesh geometry={g.base}>
        <meshPhysicalMaterial color={BRAND.ink} metalness={0.7} roughness={0.35} clearcoat={0.6} />
      </mesh>
      {pins.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y - 0.06, z]} rotation={[0, r, 0]}>
          <boxGeometry args={[0.22, 0.05, 0.07]} />
          <meshStandardMaterial color={BRAND.bone} metalness={1} roughness={0.25} />
        </mesh>
      ))}

      {/* die with the Botrix face */}
      <mesh geometry={g.die} position={[0, 0.2, 0]}>
        <meshPhysicalMaterial color="#000" metalness={0.9} roughness={0.12} clearcoat={1} />
      </mesh>
      <group ref={eyes} position={[0, 0.29, 0.02]}>
        {[-0.24, 0.24].map((x) => (
          <mesh key={x} geometry={g.eye} position={[x, 0, 0]}>
            <meshBasicMaterial color={green} toneMapped={false} />
          </mesh>
        ))}
      </group>

      {/* security dome */}
      <mesh position={[0, -0.1, 0]}>
        <icosahedronGeometry args={[2.6, 2]} />
        <meshBasicMaterial ref={dome} color={green} wireframe transparent opacity={0} toneMapped={false} />
      </mesh>
    </group>
  );
}

export default function ChipScene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 4.6, 6.2], fov: 34 }}
      gl={{ antialias: true }}
      onCreated={({ camera, gl }) => {
        camera.lookAt(0, -0.2, 0);
        gl.setClearColor(BRAND.ink);
      }}
    >
      <fog attach="fog" args={[BRAND.ink, 7, 13]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 6, 3]} intensity={1.4} />
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={3} color={BRAND.bone} position={[0, 5, -3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={3} color={BRAND.signal} position={[-5, 1, 0]} rotation-y={Math.PI / 2} scale={[6, 1, 1]} />
        <Lightformer form="ring" intensity={2} color={BRAND.bone} position={[2, 4, 4]} scale={2} />
      </Environment>
      <Chip />
      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur luminanceThreshold={0.55} intensity={0.85} radius={0.65} />
      </EffectComposer>
    </Canvas>
  );
}
