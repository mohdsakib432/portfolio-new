import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Sphere() {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.005;
        }
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

            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <Sphere />
            </Float>

            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}