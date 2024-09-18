import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  bgType?: "white" | "gradient" | "gris" | "azul"; // Añadimos el prop `bgType`
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  bgType = "white",
}) => {
  let bgClass = "";

  switch (bgType) {
    case "gradient":
      bgClass = "bg-gradient-to-br from-primary to-secondary";
      break;
    case "gris":
      bgClass = "bg-slate-100"; // Aquí puedes definir tu clase para el fondo oscuro
      break;
    case "azul":
      bgClass = "bg-gradient-to-b from-black to-primary";
      break;
    default:
      bgClass = "bg-white";
  }

  return (
    <div className={bgClass}>
      <div
        className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8  ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
