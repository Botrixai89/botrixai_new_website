"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { BRAND, lerp, ramp, scrollState, mouseState, viewState } from "../state";
import { ChatBubble, Dust, NeuralNetwork } from "./objects";
import { BotSquad } from "./BotSquad";

/** Damps scroll progress and flies the camera: a parallax dolly + mouse sway. */
function CameraRig() {
  useFrame((state, dt) => {
    scrollState.current = THREE.MathUtils.damp(scrollState.current, scrollState.target, 3.2, dt);
    const p = scrollState.current;
    const cam = state.camera;
    const aspect = state.size.width / state.size.height;
    const portrait = aspect < 1;
    viewState.xs = portrait ? 0.3 : Math.min(1, aspect / 1.45);
    viewState.lift = portrait ? 1.5 : 0;

    const flyIn = ramp(0, 0.28, p);
    const finale = ramp(0.68, 1, p);
    const z = lerp(lerp(15, 8.5, flyIn), 6.6, finale);

    cam.position.x = THREE.MathUtils.damp(cam.position.x, mouseState.x * 0.6, 2.5, dt);
    cam.position.y = THREE.MathUtils.damp(cam.position.y, mouseState.y * 0.4, 2.5, dt);
    cam.position.z = z + (portrait ? 6 : 0);
    cam.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 15], fov: 35, near: 0.1, far: 60 }}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor(BRAND.ink);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
    >
      <fog attach="fog" args={[BRAND.ink, 9, 24]} />
      <CameraRig />

      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 6, 4]} intensity={1.6} color={BRAND.bone} />
      <pointLight position={[-5, -2, 3]} intensity={30} color={BRAND.signal} distance={14} />

      {/* Studio reflections built locally — no HDR download needed */}
      <Environment resolution={256} frames={1}>
        <color attach="background" args={[BRAND.ink]} />
        <Lightformer form="rect" intensity={3} color={BRAND.bone} position={[0, 5, -6]} scale={[12, 2, 1]} />
        <Lightformer form="rect" intensity={4} color={BRAND.signal} position={[-6, 0, 0]} rotation-y={Math.PI / 2} scale={[8, 1, 1]} />
        <Lightformer form="rect" intensity={2} color={BRAND.bone} position={[6, -1, 2]} rotation-y={-Math.PI / 2} scale={[6, 0.6, 1]} />
        <Lightformer form="ring" intensity={2.5} color={BRAND.signal} position={[0, 0, 8]} scale={3} />
      </Environment>

      <Dust />
      <ChatBubble />
      <NeuralNetwork />
      <BotSquad />

      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur luminanceThreshold={0.55} luminanceSmoothing={0.2} intensity={0.9} radius={0.7} />
        <Vignette offset={0.25} darkness={0.75} />
      </EffectComposer>
    </Canvas>
  );
}
