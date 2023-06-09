const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const inputs = form.querySelectorAll(".valores");

const parseNumber = input => Number(input);

const calculaSalario = (valorHora, quantidadeHora) => valorHora * quantidadeHora;

verificaInput(inputs)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { nome, valor, quantidade } = event.target;
  const inputValor = parseNumber(valor.value.replace(",", "."));
  const inputQuantidade = parseNumber(quantidade.value.replace(",", "."));
  const salario = calculaSalario(inputValor, inputQuantidade).toFixed(2);
  resultado.textContent = `O pagamento para ${nome.value} deve ser ${salario}`;
});
