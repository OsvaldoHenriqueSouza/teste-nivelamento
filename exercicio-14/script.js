const form = document.body.querySelector("form");
const trocoSuficiente = document.body.querySelector("#suficiente");
const inputs = form.querySelectorAll("input");
const criaElementP = document.createElement('p');

const parseNumber = input => Number(input);

const calculaTroco = (precoProduto, quantidade, dinheiroRecebido) => {
  const troco = dinheiroRecebido - (precoProduto * quantidade);
  const valorInsuficiente = Math.abs(troco);
  const mensagemValorInsuficiente = `DINHEIRO INSUFICIENTE. FALTAM ${valorInsuficiente} REAIS`;
  const messagemFinal = troco < 0 ? mensagemValorInsuficiente : `TROCO = ${troco.toFixed(2)}`;
  criaElementP.textContent = messagemFinal;
  form.insertAdjacentElement('afterend', criaElementP);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { preco, quantidade, dinheiro } = event.target;
  const inputPreco = parseNumber(preco.value.replace(",", "."));
  const inputQuantidade = parseNumber(quantidade.value.replace(",", "."));
  const inputDinheiro = parseNumber(dinheiro.value.replace(",", "."));
  calculaTroco(inputPreco, inputQuantidade, inputDinheiro);
});
