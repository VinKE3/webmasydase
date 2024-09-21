import React from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Tittle from "../layout/Tittle";
import Subtitle from "../layout/Subtitle";
import { Reveal } from "../Reveal";
import { RevealBlur } from "../Reveal/RevealBlur";
import { RevealZoom } from "../Reveal/RevealZoom";
import { RevealRotate } from "../Reveal/RevealRotate";
import { RevealSlide } from "../Reveal/RevealSlide";
import { RevealFlip } from "../Reveal/RevealFlip";
import {
  FaChevronDown,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";
import { RevealZoomOut } from "../Reveal/RevealZoomOut";

const LiquidacionCompra = () => {
  const features = [
    {
      name: "Multi-empresa",
      description: "Administra varias empresas desde una sola plataforma.",
      icon: FaCheck,
    },
    {
      name: "Descarga PDF y XML",
      description: "Exporta documentos de liquidación en formatos PDF y XML.",
      icon: FaCheck,
    },
    {
      name: "Carga mediante Excel",
      description:
        "Facilita la importación masiva de datos con hojas de cálculo.",
      icon: FaCheck,
    },
    {
      name: "Permite consultar DNI",
      description:
        "Accede a información de vendedores con verificación de identidad.",
      icon: FaCheck,
    },
    {
      name: "Listado de vendedores",
      description: "Gestiona y organiza a tus vendedores fácilmente.",
      icon: FaCheck,
    },
    {
      name: "Opción de revertir las liquidaciones",
      description: "Deshaz liquidaciones en caso de error.",
      icon: FaCheck,
    },
  ];
  return (
    <Container bgType="gris">
      <Section id="liquidaciones-de-compra">
        <div className="flex flex-col items-center text-center mt-10">
          <RevealBlur>
            <Tittle type="gradienteAzul">Liquidación de compras</Tittle>
          </RevealBlur>
          <RevealZoomOut>
            <Subtitle type="gris" className="text-center">
              Es el proceso mediante el cual se revisan, verifican y ajustan
              todas las transacciones relacionadas con la adquisición de bienes
              o servicios.
            </Subtitle>
          </RevealZoomOut>
        </div>
        <div className="bg-white/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Beneficios del Servicio
              </p>
              <p className="mt-6 text-lg leading-8 text-gris">
                Nuestro sistema consta de 6 beneficios para tu negocio.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gris">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5 text-primary"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline text-gris">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default LiquidacionCompra;
