const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaMediaConsumo = (distancia, consumo) => distancia / consumo;

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { distancia, combustivel } = event.target;
  const inputDistancia = parseNumber(distancia.value.replace(",", "."));
  const inputCombustivel = parseNumber(combustivel.value.replace(",", "."));
  const mediaConsumo = calculaMediaConsumo(inputDistancia, inputCombustivel).toFixed(3);
  resultado.textContent = `ÁREA = ${mediaConsumo}`;
});
