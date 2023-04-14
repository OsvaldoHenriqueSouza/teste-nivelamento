const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const inputNomes = form.querySelectorAll(".idades");

const parseNumber = input => Number(input);

const calculaMedia = (numero1, numero2) => (numero1 + numero2) / 2;

const regex = /[0-9]/i;

verificaInput(inputNomes);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { idade1, idade2, nome1, nome2 } = event.target;
  const inputIdadeUm = parseNumber(idade1.value);
  const inputIdadeDois = parseNumber(idade2.value);
  const media = calculaMedia(inputIdadeUm, inputIdadeDois).toFixed(1);
  resultado.textContent = `A idade média de ${nome1.value} e ${nome2.value} é de ${media} anos`;
});
