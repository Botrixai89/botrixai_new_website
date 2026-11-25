"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { BRAND, lerp, ramp, scrollState, viewState } from "../state";

const green = new THREE.Color(BRAND.signal);
const bone = new THREE.Color(BRAND.bone);
const ink = new THREE.Color(BRAND.ink);

/** Deterministic PRNG (Park–Miller) — stable layouts across renders. */
export function seeded(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** Applies a scale while hiding the group entirely when it collapses. */
export function applyPresence(g: THREE.Group, s: number) {
  // responsive: compress horizontal offsets and lift above the copy on phones
  g.position.x *= viewState.xs;
  g.position.y += viewState.lift;
  g.visible = s > 0.002;
  g.scale.setScalar(Math.max(s, 0.0001));
}

/* ------------------------------------------------------------------ */
/* 01 — Conversational AI: an extruded chat bubble with typing dots    */
/* ------------------------------------------------------------------ */

function useBubbleGeometry() {
  return useMemo(() => {
    const w = 2.6,
      h = 1.75,
      r = 0.62;
    const x0 = -w / 2,
      y0 = -h / 2;
    const s = new THREE.Shape();
    s.moveTo(x0 + 0.7, y0);
    s.lineTo(x0 + w - r, y0);
    s.quadraticCurveTo(x0 + w, y0, x0 + w, y0 + r);
    s.lineTo(x0 + w, y0 + h - r);
    s.quadraticCurveTo(x0 + w, y0 + h, x0 + w - r, y0 + h);
    s.lineTo(x0 + r, y0 + h);
    s.quadraticCurveTo(x0, y0 + h, x0, y0 + h - r);
    s.lineTo(x0, y0 + 0.45);
    // tail
    s.quadraticCurveTo(x0, y0 - 0.12, x0 - 0.42, y0 - 0.48);
    s.quadraticCurveTo(x0 + 0.25, y0 - 0.32, x0 + 0.7, y0);

    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.32,
      bevelEnabled: true,
      bevelThickness: 0.16,
      bevelSize: 0.14,
      bevelSegments: 10,
      curveSegments: 48,
    });
    geo.center();
    return geo;
  }, []);
}

function MessageCard({
  position,
  rotation,
  dark,
  lines,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  dark?: boolean;
  lines: number[];
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[1.25, 0.24 + lines.length * 0.16, 0.06]} radius={0.06} smoothness={4}>
        <meshPhysicalMaterial
          color={dark ? ink : bone}
          roughness={dark ? 0.25 : 0.4}
          metalness={dark ? 0.6 : 0}
          clearcoat={1}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      {lines.map((len, i) => (
        <mesh
          key={i}
          position={[-0.5 + len / 2, (lines.length - 1) * 0.08 - i * 0.16, 0.035]}
        >
          <boxGeometry args={[len, 0.055, 0.01]} />
          <meshBasicMaterial color={i === 0 ? green : dark ? bone : ink} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

export function ChatBubble() {
  const root = useRef<THREE.Group>(null!);
  const spin = useRef<THREE.Group>(null!);
  const orbit = useRef<THREE.Group>(null!);
  const dots = useRef<THREE.Mesh[]>([]);
  const geo = useBubbleGeometry();

  useFrame((state, dt) => {
    const p = scrollState.current;
    const t = state.clock.elapsedTime;
    const enter = ramp(0.1, 0.3, p);
    const shift = ramp(0.42, 0.6, p);
    const retreat = ramp(0.7, 0.88, p);

    // 01: right of centre → 02: floats up and back behind the copy → 03: recedes into fog
    root.current.position.set(
      lerp(lerp(lerp(4, 2.3, enter), 0.4, shift), 4.5, retreat),
      lerp(lerp(lerp(-1.5, 0.05, enter), 3.3, shift), 4.6, retreat),
      lerp(lerp(-2, 0, enter), -10, shift) - retreat * 4,
    );
    applyPresence(root.current, enter * 0.82 * (1 - retreat * 0.6));

    spin.current.rotation.y = lerp(-1.2, -0.38, enter) + Math.sin(t * 0.5) * 0.12 + shift * 1.2;
    spin.current.rotation.x = Math.sin(t * 0.4) * 0.06;
    orbit.current.rotation.y += dt * 0.35;

    dots.current.forEach((d, i) => {
      if (!d) return;
      d.position.y = Math.max(0, Math.sin(t * 5 - i * 0.7)) * 0.16;
    });
  });

  return (
    <group ref={root}>
      <group ref={spin}>
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
          <mesh geometry={geo}>
            <meshPhysicalMaterial
              color={green}
              roughness={0.18}
              metalness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.08}
              sheen={0.5}
              sheenColor={bone}
            />
          </mesh>
          {/* typing indicator */}
          <group position={[0.05, 0, 0.36]}>
            {[-0.45, 0, 0.45].map((x, i) => (
              <mesh
                key={x}
                position={[x, 0, 0]}
                ref={(m) => {
                  if (m) dots.current[i] = m;
                }}
              >
                <sphereGeometry args={[0.13, 32, 32]} />
                <meshStandardMaterial color={ink} roughness={0.3} metalness={0.4} />
              </mesh>
            ))}
          </group>
        </Float>
      </group>

      <group ref={orbit} rotation={[0.35, 0, -0.18]}>
        <MessageCard position={[1.75, 0.95, 0.2]} rotation={[0, -0.6, 0.05]} lines={[0.55, 0.9]} />
        <MessageCard position={[-1.7, -0.75, 0.4]} rotation={[0, 0.7, -0.05]} dark lines={[0.4, 0.95, 0.7]} />
        <MessageCard position={[0.4, -1.45, -1.4]} rotation={[0, 0.2, 0]} lines={[0.6, 0.45]} />
        <MessageCard position={[-0.6, 1.45, -1.3]} rotation={[0, -0.3, 0]} dark lines={[0.5, 0.8]} />
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Automation: a neural network with pulses travelling its edges  */
/* ------------------------------------------------------------------ */

const PULSES = 36;

function useNetwork() {
  return useMemo(() => {
    const src = new THREE.IcosahedronGeometry(1.75, 2);
    const pos = src.getAttribute("position");
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < pos.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      if (!nodes.some((n) => n.distanceToSquared(v) < 1e-6)) nodes.push(v);
    }
    // organic jitter so it reads as a network, not a geodesic ball
    const rand = seeded(7);
    nodes.forEach((n) => n.multiplyScalar(0.82 + rand() * 0.36));

    const edges: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++)
      for (let j = i + 1; j < nodes.length; j++)
        if (nodes[i].distanceTo(nodes[j]) < 0.78 && rand() > 0.18) edges.push([i, j]);

    const linePos = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], k) => {
      nodes[a].toArray(linePos, k * 6);
      nodes[b].toArray(linePos, k * 6 + 3);
    });
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));

    const hubs = new Set<number>();
    while (hubs.size < 9) hubs.add(Math.floor(rand() * nodes.length));

    const pulses = Array.from({ length: PULSES }, () => ({
      edge: Math.floor(rand() * edges.length),
      t: rand(),
      speed: 0.35 + rand() * 0.6,
    }));

    return { nodes, edges, lineGeo, hubs, pulses, rand };
  }, []);
}

export function NeuralNetwork() {
  const root = useRef<THREE.Group>(null!);
  const spin = useRef<THREE.Group>(null!);
  const nodeMesh = useRef<THREE.InstancedMesh>(null!);
  const pulseMesh = useRef<THREE.InstancedMesh>(null!);
  const core = useRef<THREE.Mesh>(null!);
  const { nodes, edges, lineGeo, hubs, pulses, rand } = useNetwork();
  const tmp = useMemo(() => new THREE.Object3D(), []);
  const v = useMemo(() => new THREE.Vector3(), []);
  const initialised = useRef(false);

  useFrame((state, dt) => {
    const p = scrollState.current;
    const t = state.clock.elapsedTime;
    const enter = ramp(0.4, 0.58, p);
    const retreat = ramp(0.7, 0.88, p);

    root.current.position.set(
      lerp(lerp(-5, -2.35, enter), -6.5, retreat),
      lerp(lerp(-2, -0.1, enter), -0.6, retreat),
      lerp(lerp(-3, 0, enter), -9, retreat),
    );
    applyPresence(root.current, enter * lerp(0.88, 0.7, retreat));
    if (!root.current.visible) return;

    spin.current.rotation.y += dt * 0.12;
    spin.current.rotation.x = Math.sin(t * 0.2) * 0.25 + p * 1.5;

    if (!initialised.current) {
      nodes.forEach((n, i) => {
        tmp.position.copy(n);
        tmp.scale.setScalar(hubs.has(i) ? 1.9 : 1);
        tmp.updateMatrix();
        nodeMesh.current.setMatrixAt(i, tmp.matrix);
        nodeMesh.current.setColorAt(i, hubs.has(i) ? green : bone);
      });
      nodeMesh.current.instanceMatrix.needsUpdate = true;
      if (nodeMesh.current.instanceColor) nodeMesh.current.instanceColor.needsUpdate = true;
      initialised.current = true;
    }

    pulses.forEach((pl, i) => {
      pl.t += dt * pl.speed;
      if (pl.t >= 1) {
        // hop to an edge connected to where this pulse arrived
        const end = edges[pl.edge][1];
        const next = edges.findIndex(([a], k) => a === end && k !== pl.edge);
        pl.edge = next >= 0 ? next : Math.floor(rand() * edges.length);
        pl.t = 0;
      }
      const [a, b] = edges[pl.edge];
      v.lerpVectors(nodes[a], nodes[b], pl.t);
      tmp.position.copy(v);
      tmp.scale.setScalar(Math.sin(pl.t * Math.PI) * 1.2 + 0.2);
      tmp.updateMatrix();
      pulseMesh.current.setMatrixAt(i, tmp.matrix);
    });
    pulseMesh.current.instanceMatrix.needsUpdate = true;

    core.current.scale.setScalar(1 + Math.sin(t * 2.2) * 0.06);
  });

  return (
    <group ref={root}>
      <group ref={spin}>
        <lineSegments geometry={lineGeo}>
          <lineBasicMaterial color={bone} transparent opacity={0.22} />
        </lineSegments>
        <instancedMesh ref={nodeMesh} args={[undefined, undefined, nodes.length]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial toneMapped={false} />
        </instancedMesh>
        <instancedMesh ref={pulseMesh} args={[undefined, undefined, PULSES]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={green} toneMapped={false} />
        </instancedMesh>
        {/* inner processor */}
        <mesh ref={core}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial color={ink} metalness={0.9} roughness={0.2} flatShading />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.72, 1]} />
          <meshBasicMaterial color={green} wireframe transparent opacity={0.35} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Ambient star-dust for depth                                          */
/* ------------------------------------------------------------------ */

export function Dust({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const geo = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const rand = seeded(42);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 30;
      pos[i * 3 + 1] = (rand() - 0.5) * 30;
      pos[i * 3 + 2] = (rand() - 0.5) * 30 - 4;
      const c = rand() < 0.12 ? green : bone;
      c.toArray(col, i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  }, [count]);

  useFrame((state) => {
    const p = scrollState.current;
    ref.current.rotation.y = state.clock.elapsedTime * 0.01 + p * 0.6;
    ref.current.position.y = p * 6;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}
