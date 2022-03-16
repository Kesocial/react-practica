import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Persona from "./Persona";

const personas = [
  {
    id: 0,
    nombre: "Kevin",
    apellido: "Acevedo",
    edad: 17,
    email: "kevinacevedo@gmail.com",
  },
  {
    id: 1,
    nombre: "Juan",
    apellido: "Derbez",
    edad: 18,
    email: "juanderbez@gmail.com",
  },
  {
    id: 2,
    nombre: "Marco",
    apellido: "Jurado",
    edad: 18,
    email: "marcojurado@gmail.com",
  },
  {
    id: 3,
    nombre: "Alejo",
    apellido: "cocaliadis",
    edad: 18,
    email: "alejococaliadis@gmail.com",
  },
  {
    id: 4,
    nombre: "Agustin",
    apellido: "Lopez",
    edad: 18,
    email: "agustinlopez@gmail.com",
  },
  {
    id: 5,
    nombre: "Gaspar",
    apellido: "Liborero",
    edad: 18,
    email: "gasparliboreiro@gmail.com",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <div className="contenedor">
      <Persona pers={personas[0]} />
      <Persona pers={personas[1]} />
      <Persona pers={personas[2]} />
      <Persona pers={personas[3]} />
      <Persona pers={personas[4]} />
      <Persona pers={personas[5]} />
      <Persona pers={personas[5]} />
      <Persona pers={personas[5]} />
      <Persona pers={personas[5]} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
