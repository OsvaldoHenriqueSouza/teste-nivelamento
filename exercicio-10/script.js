const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const verificaMenorValor = (primeiroValor, segundoValor, terceiroValor) => {
  const valores = [primeiroValor, segundoValor, terceiroValor];
  const [ordenaValores] = valores.sort((a, b) => a - b);
  return ordenaValores;
}

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { primeiro, segundo, terceiro } = event.target;
  const inputPrimeiro = parseNumber(primeiro.value.replace(",", "."));
  const inputSegundo = parseNumber(segundo.value.replace(",", "."));
  const inputTerceiro = parseNumber(terceiro.value.replace(",", "."));
  const menorValor = verificaMenorValor(inputPrimeiro, inputSegundo, inputTerceiro);
  resultado.textContent = `MENOR = ${menorValor}`;
});