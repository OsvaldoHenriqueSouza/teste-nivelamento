const form = document.body.querySelector("form");
const resultado = document.body.querySelector("#resultado");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaAreaCirculo = raio => raio * raio * Math.PI.toFixed(5);

const verificaInput = elements => {
  const regex = /[0-9]/i;
  elements.forEach((item) => {
      item.addEventListener("keyup", ({ target }) => {
        const validacao = regex.test(target.value);
        if (!validacao) {
          target.value = "";
        }
      });
  });
}

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { raio } = event.target;
  const inputRaio = parseNumber(raio.value.replace(",", "."));
  const area = calculaAreaCirculo(inputRaio).toFixed(3);
  resultado.textContent = `ÁREA = ${area}`;
});
