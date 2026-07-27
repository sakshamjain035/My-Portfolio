"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function TerrainMesh({ targetPrecision = 85 }: { budget: number; targetPrecision: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group rotation={[-Math.PI / 3.5, 0, Math.PI / 6]}>
        <mesh ref={meshRef}>
          <planeGeometry args={[7, 7, 24, 24]} />
          <meshStandardMaterial
            color={targetPrecision > 80 ? "#00f5a0" : "#00f2fe"}
            wireframe
            roughness={0.1}
            metalness={0.9}
            emissive={targetPrecision > 80 ? "#007744" : "#004477"}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function PerformanceGraph3D({
  budget,
  targetPrecision,
}: {
  budget: number;
  targetPrecision: number;
}) {
  return (
    <div className="w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#00f2fe" />
        <pointLight position={[-5, 5, -5]} intensity={1.5} color="#7928ca" />
        <TerrainMesh budget={budget} targetPrecision={targetPrecision} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
