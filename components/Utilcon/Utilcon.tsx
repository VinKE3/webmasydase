"use client";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { MotionTransition } from "../MotionTransition";
import { IconAdjustmentsBolt } from "@tabler/icons-react";
import EncryptButton from "../layout/Buttons/EncryptButton";

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

const Utilcon = () => {
  return (
    <Container bgType="white">
      <Section id="utilcon">
        <MotionTransition>
          <div className="relative isolate">
            <div className="mx-auto max-w-full sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-slate-100 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <div className="relative">
                  <img
                    alt=""
                    src="/utilcon/1.jpg"
                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                  />

                  <div className="absolute inset-0 bg-black opacity-10 rounded-2xl"></div>
                </div>
                <div className="w-full flex-auto">
                  <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Ultilcon, optimiza tu productividad
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gris">
                    Herramienta diseñada para facilitar las provisiones o cargas
                    masivas de sus ventas y compras, cuenta con un módulo de
                    cancelaciones y trabaja enterno red.
                  </p>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary">
                    Beneficios de nuestro sistema
                  </h3>
                  <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                  >
                    {features.map(({ name, icon: IconAdjustmentsBolt }) => (
                      <li key={name} className="flex gap-x-3 text-gris">
                        <IconAdjustmentsBolt className="h-7 w-5 flex-none text-primary" />
                        {name}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex">
                    <EncryptButton textButton="Solicitar Demo" />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
                className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#81cbff] to-[#00ccff] opacity-25"
              />
            </div>
          </div>
        </MotionTransition>
      </Section>
    </Container>
  );
};

export default Utilcon;
