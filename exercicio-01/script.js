const form = document.body.querySelector("form");
const areaTerreno = document.body.querySelector("#area-terreno");
const precoTerreno = document.body.querySelector("#preco-terreno");

const parseNumber = input => Number(input);

const regex = /[0-9]/i;

let inputs = form.querySelectorAll("input");

inputs.forEach((item) => {
  item.addEventListener("keyup", ({ target }) => {
    const validacao = regex.test(target.value);
    if (!validacao) {
      target.value = "";
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { largura, comprimento, valor } = event.target;
  const inputLargura = parseNumber(largura.value);
  const inputComprimento = parseNumber(comprimento.value);
  const inputValorMentro = parseNumber(valor.value);
  const valorAreametro = inputLargura * inputComprimento;
  areaTerreno.textContent = `Área do terreno = ${valorAreametro.toFixed(2)}`;
  precoTerreno.textContent = `Preço do terreno = ${(valorAreametro * inputValorMentro).toFixed(2)}`;
});
