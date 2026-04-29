import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { Float } from "@react-three/drei";

<Float speed={2} rotationIntensity={2} floatIntensity={2}>
    <Sphere />
</Float>

function Sphere() {
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.005;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="cyan" wireframe />
        </mesh>
    );
}

export default function ThreeScene() {
    return (
        <Canvas style={{ height: "100vh" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} />

            <Sphere />

            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}