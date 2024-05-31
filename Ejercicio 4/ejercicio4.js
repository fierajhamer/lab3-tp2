const formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#resultadoIMC");

formulario.onsubmit = (form) => {
  form.preventDefault();
  let peso = parseInt(document.querySelector("#inputPeso").value);
  let estatura = parseInt(document.querySelector("#inputEstatura").value);

  if (peso < 1 || estatura < 1) {
    resultado.innerHTML = "Error, verifique que el peso o la altura no sean negativos o iguales a cero";
  } else {
    let imc = peso / (estatura / 100) ** 2;
    resultado.innerHTML = `IMC: ${imc.toFixed(2)}`;
  }
};
