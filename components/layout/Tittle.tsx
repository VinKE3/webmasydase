import React from "react";

type TittleProps = {
  children: React.ReactNode;
  className?: string;
  type?: "gradienteAzul" | "gradienteCeleste" | "blanco";
};

const Tittle: React.FC<TittleProps> = ({
  children,
  className = "",
  type = "blanco",
}) => {
  let typeSwitch = "";

  switch (type) {
    case "gradienteAzul":
      typeSwitch =
        "from-azul to-celeste bg-gradient-to-r bg-clip-text text-transparent text-center block";
      break;
    case "gradienteCeleste":
      typeSwitch =
        "from-celeste to-azul bg-gradient-to-r bg-clip-text text-transparent text-center block";
      break;
    default:
      typeSwitch = "text-white text-center block";
  }

  return (
    <h1
      className={`mb-4 text-4xl md:text-5xl font-bold ${typeSwitch} ${className}`}
    >
      {children}
    </h1>
  );
};

export default Tittle;
