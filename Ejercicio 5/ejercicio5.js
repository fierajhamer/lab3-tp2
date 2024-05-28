const formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#resultadoArea");

formulario.onsubmit = (form) => {
  form.preventDefault();
  let ladoA = document.querySelector("#inputA").value;
  let ladoB = document.querySelector("#inputB").value;
  let ladoC = document.querySelector("#inputC").value;

  let cuadrado = ladoB * ladoC;
  let triangulo = ((ladoA-ladoC)*ladoB)/2

  resultado.innerHTML = `Área: ${cuadrado + triangulo} m2`
};
