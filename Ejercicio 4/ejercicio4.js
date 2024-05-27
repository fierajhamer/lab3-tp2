const formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#resultadoIMC"); 


formulario.onsubmit = (form) => {
  form.preventDefault();
  let peso = document.querySelector("#inputPeso").value;
  let estatura = document.querySelector("#inputEstatura").value;

  let imc =  peso/(estatura/100)**2
  resultado.innerHTML = imc.toFixed(2)

};
