const form = document.body.querySelector("form");
const trocoSuficiente = document.body.querySelector("#suficiente");
const inputs = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaTroco = (precoProduto, quantidade, dinheiroRecebido) => {
  const troco = dinheiroRecebido - (precoProduto * quantidade);
  const criaElementP = document.createElement('p');
  
  if (troco < 0) {
    const valorInsuficiente = Math.abs(troco);
    criaElementP.innerText = `DINHEIRO INSUFICIENTE. FALTAM ${valorInsuficiente} REAIS`;
    form.appendChild(criaElementP);
    return;
  }

  if (criaElementP.parentNode) {
    criaElementP.parentNode.removeChild(criaElementP);
  }
  return troco;
}

verificaInput(inputs);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { preco, quantidade, dinheiro } = event.target;
  const inputPreco = parseNumber(preco.value.replace(",", "."));
  const inputQuantidade = parseNumber(quantidade.value.replace(",", "."));
  const inputDinheiro = parseNumber(dinheiro.value.replace(",", "."));
  const troco = calculaTroco(inputPreco, inputQuantidade, inputDinheiro).toFixed(2);
  trocoSuficiente.textContent = `TROCO = ${troco}`;
});
