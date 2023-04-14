const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const inputs = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaTroco = (precoProduto, quantidade, dinheiroRecebido) =>
  dinheiroRecebido - (precoProduto * quantidade);

verificaInput(inputs);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { preco, quantidade, dinheiro } = event.target;
  const inputPreco = parseNumber(preco.value.replace(",", "."));
  const inputQuantidade = parseNumber(quantidade.value.replace(",", "."));
  const inputDinheiro = parseNumber(dinheiro.value.replace(",", "."));
  const troco = calculaTroco(inputPreco, inputQuantidade, inputDinheiro).toFixed(2);
  resultado.textContent = `TROCO = ${troco}`;
});
