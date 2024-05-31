const formulario = document.querySelector("#formulario");
let resultado = document.querySelector("#resultadoArea");

formulario.onsubmit = (form) => {
  form.preventDefault();
  let ladoA = parseInt(document.querySelector("#inputA").value);
  let ladoB = parseInt(document.querySelector("#inputB").value);
  let ladoC = parseInt(document.querySelector("#inputC").value);

  let cuadrado = ladoB * ladoC;
  let triangulo = ((ladoA - ladoC) * ladoB) / 2;

  if (
    ladoC >= ladoA ||
    ladoA < 1 ||
    ladoB < 1 ||
    ladoC < 1 
  ) {
    resultado.innerHTML = "Error, verifique que A sea mayor a C, o si ingresó algún número negativo";
  } else {
    resultado.innerHTML = `Área: ${cuadrado + triangulo} m2`;
  }
};
