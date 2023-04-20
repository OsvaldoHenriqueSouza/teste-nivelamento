const form = document.body.querySelector("form");
const valor = document.body.querySelector("#valor");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaValor = quantidadeMinutos => {
  const taxaFixa = 50;
  const quantidadeMinutosFixo = 100;
  const valorMinutosExcedido = 2;
  let valorTotal = 0;
  const quantidadeMinutosExcedido = quantidadeMinutos - quantidadeMinutosFixo;

  if (quantidadeMinutosExcedido > 0) {
    valorTotal = taxaFixa + (valorMinutosExcedido * quantidadeMinutosExcedido);
    return valorTotal;
  }
  return taxaFixa;
}

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { minutos } = event.target;
  const inputMinutos = parseNumber(minutos.value.replace(",", "."));
  const resultado = calculaValor(inputMinutos);
  valor.textContent = `Valor a pagar: ${resultado.toFixed(2)}`;
});
