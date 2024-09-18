import React from "react";

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
  type?: "blanco" | "gris" | "grisOscuro";
};

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className = "",
  type = "blanco",
}) => {
  let typeSwitch = "";

  switch (type) {
    case "grisOscuro":
      typeSwitch =
        "from-grisOscuro to-grisClarito bg-gradient-to-r bg-clip-text text-transparent block";
      break;
    case "gris":
      typeSwitch =
        "from-grisClarito to-grisOscuro bg-gradient-to-r bg-clip-text text-transparent block"; // Aquí puedes definir tu clase para el fondo oscuro
      break;
    default:
      typeSwitch = "text-white";
  }
  return (
    <h4 className={`mb-5 font-semibold md:text-2xl sm:text-xl ${className}`}>
      <span className={typeSwitch}>{children}</span>
    </h4>
  );
};

export default Subtitle;
