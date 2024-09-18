"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { dataAbout } from "./About.data";
import { Meteors } from "../Meteors/meteors";
import EncryptButton from "../layout/Buttons/EncryptButton";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Tittle from "../layout/Tittle";
import Subtitle from "../layout/Subtitle";
import { MotionTransition } from "../MotionTransition";

export function About() {
  // const { theme } = useTheme();
  // const isDark = theme === "dark";
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <Container bgType="azul">
      <Section id="#nosotros">
        <Reveal>
          <Tittle className="text-center" level={2}>
            Tienes un problema? Encontramos la mejor Solución.
          </Tittle>
        </Reveal>

        <div className="flex flex-col items-center text-center mt-10">
          <Reveal>
            <Subtitle>
              En MASYDASE, somos un equipo joven dedicado a la programación de
              sistemas convertidas en soluciones, y que brinda soporte técnico a
              más de 1500 empresas nacionales, desde 1998.
            </Subtitle>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link href="#plans">
                <EncryptButton textButton="Contáctanos" />
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto p-4">
            {dataAbout.map(({ id, title, description }) => {
              return (
                <div key={id} className="w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
                  <div className="relative shadow-xl  border border-white px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      {title}
                    </h1>
                    <p className="font-normal text-base  text-white mb-4 relative z-50">
                      {description}
                    </p>
                    <Meteors number={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </MotionTransition>
      </Section>
    </Container>
  );
}
