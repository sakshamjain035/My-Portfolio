"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Deterministic PRNG to maintain React hook purity
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerWireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x -= delta * 0.15;
      outerWireframeRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group scale={1.8}>
      {/* Inner Glowing Distorted AI Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 4]} />
          <MeshDistortMaterial
            color="#00f2fe"
            emissive="#005577"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Outer Cyber Geometric Ring */}
      <mesh ref={outerWireframeRef}>
        <dodecahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial
          color="#7928ca"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Pulsing Light Sources */}
      <pointLight position={[5, 5, 5]} intensity={25} color="#00f2fe" />
      <pointLight position={[-5, -5, -5]} intensity={20} color="#7928ca" />
      <ambientLight intensity={0.4} />
    </group>
  );
}

function FloatingParticles({ count = 250 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color("#00f2fe");
    const colorPurple = new THREE.Color("#7928ca");

    for (let i = 0; i < count; i++) {
      const rSeed = seededRandom(i * 4 + 1);
      const tSeed = seededRandom(i * 4 + 2);
      const pSeed = seededRandom(i * 4 + 3);
      const cSeed = seededRandom(i * 4 + 4);

      const radius = 3.5 + rSeed * 4;
      const theta = tSeed * Math.PI * 2;
      const phi = Math.acos(pSeed * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = colorCyan.clone().lerp(colorPurple, cSeed);
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-full min-h-[450px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <NeuralCore />
        <FloatingParticles count={300} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
