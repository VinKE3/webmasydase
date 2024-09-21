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
        "from-grisClarito to-grisOscuro bg-gradient-to-r bg-clip-text text-transparent block";
      break;
    default:
      typeSwitch = "text-white";
  }

  return (
    <h1
      className={`${typeSwitch} mb-5 font-semibold md:text-2xl sm:text-xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Subtitle;
