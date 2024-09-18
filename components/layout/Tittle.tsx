import React from "react";

type TittleProps = {
  level: 1 | 2 | 3; // Niveles de título (h1, h2, h3)
  children: React.ReactNode;
  className?: string;
};

const Tittle: React.FC<TittleProps> = ({ level, children, className = "" }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={`mb-4 text-4xl md:text-5xl font-bold from-celeste to-azul bg-gradient-to-r bg-clip-text text-transparent  block  ${className}`}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={`mb-4 text-4xl md:text-5xl font-bold text-white ${className}`}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={`mb-4 text-4xl md:text-5xl font-bold from-azul to-celeste bg-gradient-to-r bg-clip-text text-transparent  block${className}`}
        >
          {children}
        </h3>
      );
    default:
      return (
        <h1 className={`text-4xl font-bold text-primary ${className}`}>
          {children}
        </h1>
      );
  }
};

export default Tittle;
