const form = document.body.querySelector("form");
const x1 = document.body.querySelector("#xi");
const x2 = document.body.querySelector("#xii");
const invalido = document.body.querySelector("#invalido");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaRaiz = (coefA ,coefB, coefC) => {
  const delta = Math.pow(coefB, 2) - 4 * coefA * coefC;
  let raizes = [];
  let raiz1 = 0;
  let raiz2 = 0;
  if (delta > 0) {
    raiz1 = (-coefB + Math.sqrt(delta)) / (2 * coefA);
    raizes.push(raiz1);
    raiz2 = (-coefB - Math.sqrt(delta)) / (2 * coefA);
    raizes.push(raiz2);
    return raizes;
  }
  else {
    if (delta === 0) {
      raiz1 = (-coefB + Math.sqrt(delta)) / (2 * coefA);
      raizes.push(raiz1);
      return raizes;
    }
    raizes.push("Esta equação não possui raízes reais");
    return raizes;
  }
}

console.log(calculaRaiz(1,3,4));

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { primeiro, segundo, terceiro } = event.target;
  const inputPrimeiro = parseNumber(primeiro.value.replace(",", "."));
  const inputSegundo = parseNumber(segundo.value.replace(",", "."));
  const inputTerceiro = parseNumber(terceiro.value.replace(",", "."));
  const resultado = calculaRaiz(inputPrimeiro, inputSegundo, inputTerceiro);
  console.log(typeof resultado[0])
  x1.textContent = `X1 = ${resultado[0].toFixed(4)}`;
  x2.textContent = `X2 = ${resultado[1].toFixed(4)}`;
  invalido.textContent = `${resultado[0]}`;
});