"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Tittle from "../layout/Tittle";
import Subtitle from "../layout/Subtitle";
import { MotionTransition } from "../MotionTransition";
import EncryptButton from "../layout/Buttons/EncryptButton";
import { DataUtilcon } from "./Utilcon.data";
import { SimpleHoverEffect } from "../FeatureSections/SimpleHoverEffect";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { FlipWords } from "../FlipWords/flip-words";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../TextRevealCard/text-reveal-card";

const features = [
  {
    name: "Provisiones 36000 asientos en CODEBASE y SQL",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Permite pagar y cobrar en fechas distintas efectivo y con bancos",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Permite pagar y cobrar parte o saldos efectivo y con bancos",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Eliminar comprobantes",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Provisiones de Ventas, Compras y Honorarios",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Cancelaciones masivas de comprobantes",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Tipo de cambio diario y manual",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Consulta Ruc (Sunat)",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Valida comprobantes",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Carga de Anexos",
    icon: IconAdjustmentsBolt,
  },
  {
    name: "Elimina empresas y periodos",
    icon: IconAdjustmentsBolt,
  },
];
const words = ["Mejores", "Llamativos", "Elegantes", "Modernos"];
const Utilcon = () => {
  return (
    <Container>
      <Section id="utilcon">
        <div className="flex flex-col items-center text-center mt-10">
          {" "}
          <Reveal>
            <Tittle level={1}>Ultilcon, optimiza tu productividad</Tittle>
          </Reveal>
          <Reveal>
            <Subtitle type="grisOscuro" className="text-center">
              Herramienta diseñada para facilitar las provisiones o cargas
              masivas de sus ventas y compras.
            </Subtitle>
          </Reveal>
        </div>
        <MotionTransition>
          <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pl-4 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold  text-primary">
                      Beneficios
                    </h2>
                    <dl className="mt-10 max-w-xl space-y-4 text-base  text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className=" font-semibold text-gray-900">
                            <feature.icon
                              aria-hidden="true"
                              className="absolute left-1 top-1 h-5 w-5 text-primary"
                            />
                            {feature.name}
                          </dt>{" "}
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className="flex items-start justify-end lg:order-first">
                  <img
                    alt="Product screenshot"
                    src="/utilcon/1.jpg"
                    width={500}
                    height={500}
                    className="w-[48rem] h-[40rem] object-cover object-center max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionTransition>
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Construye
            <FlipWords words={words} /> <br />
            Sitios Web con MasyDase
          </div>
        </div>
        <div className="flex items-center justify-center bg-celeste h-[40rem] rounded-2xl w-full">
          <TextRevealCard
            text="Tienes un problema?"
            revealText="Nosotros la solución"
          >
            <TextRevealCardTitle>
              Como empresa, siemrpre se nos presentan problemas
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              Pero no te preocupes, nosotros tenemos la respuesta como por arte
              de magia
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </Section>
    </Container>
  );
};

export default Utilcon;
