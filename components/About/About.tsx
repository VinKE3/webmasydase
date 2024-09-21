"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import { dataAbout } from "./About.data";
import EncryptButton from "../layout/Buttons/EncryptButton";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Tittle from "../layout/Tittle";
import Subtitle from "../layout/Subtitle";
import { MotionTransition } from "../MotionTransition";
import CardMeteor from "../Meteors/cardMeteor";
import { TextGenerateEffect } from "@/components/TextGenerateEffect/text-generate-effect";
export function About() {
  const words = `En MASYDASE, somos un equipo joven dedicado a la programación de sistemas convertidas en soluciones, y que brinda soporte técnico a más de 1500 empresas nacionales, desde 1998.`;
  return (
    <Container bgType="azul">
      <Section id="nosotros">
        <div className="flex flex-col items-center text-center mt-10">
          <Reveal>
            <Tittle type="blanco">
              Tienes un problema? Encontramos la mejor Solución.
            </Tittle>
          </Reveal>
          <TextGenerateEffect className="text-white" words={words} />
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
            {dataAbout.map(({ id, title, description, imageUrl }) => {
              return (
                <CardMeteor
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                />
              );
            })}
          </div>
        </MotionTransition>
      </Section>
    </Container>
  );
}
