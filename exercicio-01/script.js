const form = document.body.querySelector("form");
const areaTerreno = document.body.querySelector("#area-terreno");
const precoTerreno = document.body.querySelector("#preco-terreno");
const inputs = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const regex = /[0-9]/i;

verificaInput(inputs);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { largura, comprimento, valor } = event.target;
  const inputLargura = parseNumber(largura.value.replace(",", "."));
  const inputComprimento = parseNumber(comprimento.value.replace(",", "."));
  const inputValorMentro = parseNumber(valor.value.replace(",", "."));
  const valorAreametro = inputLargura * inputComprimento;
  areaTerreno.textContent = `Área do terreno = ${valorAreametro.toFixed(2)}`;
  precoTerreno.textContent = `Preço do terreno = ${(valorAreametro * inputValorMentro).toFixed(2)}`;
});
