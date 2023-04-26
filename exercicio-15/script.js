const form = document.body.querySelector("form");
const valor = document.body.querySelector("#resultado");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const verificaGlicose = medidaGlicose => {
  if (medidaGlicose <= 100) {
    return "Normal";
  } else if (medidaGlicose > 100 && medidaGlicose <= 140) {
    return "Elevado";
  }
  return "Diabetes";
}

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { glicose } = event.target;
  const inputGlicose = parseNumber(glicose.value.replace(",", "."));
  const resultado = verificaGlicose(inputGlicose);
  valor.textContent = `Classificação: ${resultado}`;
});
