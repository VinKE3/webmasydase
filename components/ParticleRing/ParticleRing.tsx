"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/lib/utils";
import { Group } from "three";
import { motion } from "framer-motion";
const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -17.5, -15],
        }}
        style={{ height: "100vh", width: "100%" }}
        className="bg-black"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      {/* Contenedor para texto */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-auto md:right-[10%] md:translate-x-0 md:text-left">
        <h1 className="text-3xl md:text-5xl text-white font-normal">
          Transformamos
          <span className="md:my-5 block uppercase text-cyan-400/90">
            ideas en soluciones
          </span>
          ágiles de confianza
        </h1>
      </div>

      {/* Botón de desplazamiento */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center md:justify-end md:right-[23%]">
        <a href="#nosotros">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  return (
    // @ts-expect-error - Passing a num array as opposed to a Vector3 is acceptable
    // and the referenced method in the documentation
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
