const formulario = document.querySelector("#formulario");
let listadoPersonas = [];

formulario.onsubmit = (form) => {
  form.preventDefault();
  let persona = {
    nombre: document.querySelector("#nombre").value,
    apellido: document.querySelector("#apellido").value,
    edad: document.querySelector("#edad").value,
    estatura: document.querySelector("#estatura").value,
    email: document.querySelector("#email").value,
  };

  if (
    persona.nombre.length < 50 &&
    persona.nombre.length > 2 &&
    persona.apellido.length < 50 &&
    persona.apellido.length > 2 &&
    persona.edad > 17 &&
    persona.edad.length > 0 &&
    persona.estatura < 230 &&
    persona.estatura.length > 0 &&
    persona.email.includes("@") &&
    persona.email.length > 0
  ) {
    document.querySelector("#status").textContent = "Estado del envío: correcto";
    document.querySelector("#status").className = "status-correct"
  } else {
    document.querySelector("#status").textContent = "Estado del envío: incorrecto";
    document.querySelector("#status").className = "status-incorrect"
  } 
};
