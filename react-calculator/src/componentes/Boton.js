import React from "react";
import "../hojas-de-estilo/Boton.css";

export function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

// 4:24:24
