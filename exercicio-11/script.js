const form = document.body.querySelector("form");
const nota = document.body.querySelector("#nota");
const resultado = document.body.querySelector("#resultado");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { primeira, segunda } = event.target;
  const inputPrimeira = parseNumber(primeira.value.replace(",", "."));
  const inputSegunda = parseNumber(segunda.value.replace(",", "."));
  const notaFinal = (inputPrimeira + inputSegunda).toFixed(1);
  nota.textContent = `NOTA FINAL = ${notaFinal}`;
  resultado.textContent = `${notaFinal < 60 ? "REPROVADO" : "APROVADO"}`;
});
