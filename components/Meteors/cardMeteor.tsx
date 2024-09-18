import React from "react";
import { Meteors } from "./meteors";

type cardMeteorProps = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
};

const CardMeteor: React.FC<cardMeteorProps> = ({
  id,
  title,
  description,
  imageUrl,
}: cardMeteorProps) => {
  return (
    <div key={id} className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full rounded-full blur-3xl bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500" />
      <div
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover", // Ajusta la imagen para que cubra todo el div
          backgroundPosition: "center", // Centra la imagen
          width: "100%", // Opcional: ajusta el tamaño del contenedor
          height: "400px", // Opcional: ajusta la altura del contenedor
        }}
        className="relative  shadow-xl border border-white px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start"
      >
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
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
        <Meteors number={40} />
      </div>
    </div>
  );
};

export default CardMeteor;
