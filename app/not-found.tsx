import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="mt-4">
        Lo sentimos, no pudimos encontrar la página que buscas.
      </p>
      <Link className="mt-6 text-blue-500 hover:underline" href="/">
        Volver a la página de inicio
      </Link>
    </div>
  );
}
