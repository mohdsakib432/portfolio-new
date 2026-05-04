import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import {
    OrbitControls,
    Float,
    MeshDistortMaterial,
    Sphere,
    Stars,
    Text
} from "@react-three/drei";

// 🌌 Animated Sphere
function AnimatedSphere() {
    const ref = useRef();

    useFrame(({ clock, mouse }) => {
        if (!ref.current) return;

        ref.current.rotation.x = clock.getElapsedTime() / 3 + mouse.y;
        ref.current.rotation.y = clock.getElapsedTime() / 3 + mouse.x;
    });

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1.5, 100, 200]} ref={ref}>
                <MeshDistortMaterial
                    color="#00ffff"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                />
            </Sphere>
        </Float>
    );
}

// 🧊 Floating Cube
function FloatingCube() {
    const ref = useRef();

    useFrame(({ clock }) => {
        if (!ref.current) return;
        ref.current.rotation.x = clock.getElapsedTime();
        ref.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <Float speed={3}>
            <mesh ref={ref} position={[3, 1, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#8b5cf6" />
            </mesh>
        </Float>
    );
}

// 🔤 3D Text
function FloatingText() {
    return (
        <Float speed={2}>
            <Text
                position={[0, -2.5, 0]}
                fontSize={0.8}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
            >
                SAKIB.DEV
            </Text>
        </Float>
    );
}

// 🎯 MAIN SCENE
export default function ThreeScene() {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>

            {/* 🌌 Background Stars */}
            <Stars radius={50} depth={50} count={3000} factor={4} fade />

            {/* 💡 Lights */}
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={2} />
            <pointLight position={[-5, -5, -5]} intensity={2} color="#00ffff" />

            {/* 🎨 Objects */}
            <AnimatedSphere />
            <FloatingCube />
            <FloatingText />

            {/* 🎮 Controls */}
            <OrbitControls enableZoom={false} />

            {/* 🌫 Fog */}
            <fog attach="fog" args={["#000000", 5, 15]} />

        </Canvas>
    );
}