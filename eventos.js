const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

function btnOnClick() {
let numero1 = Number(input1.value);
let numero2 = Number(input2.value);
let resultado = numero1 + numero2;
result.innerText = "Resultado: " + resultado;
}