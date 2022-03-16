import "./Persona.css";

function Persona(params) {
  function activar() {
    let e = document.querySelector(`.Persona${params.pers.id}`);
    e.classList.toggle("activo");
  }
  let clase = "Persona" + params.pers.id + " Persona";
  let Persona = (
    <div onClick={activar} className={clase}>
      <span>Nombre: {params.pers.nombre}</span>
      <span>Apellido: {params.pers.apellido}</span>
      <span>Edad: {params.pers.edad}</span>
      <span>Email: {params.pers.email}</span>
    </div>
  );
  return Persona;
}

export default Persona;
