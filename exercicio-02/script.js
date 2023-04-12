const form = document.body.querySelector("form");
const inputArea = document.body.querySelector("#area"); 
const inputPerimetro = document.body.querySelector("#perimetro");
const inputDiagonal = document.body.querySelector("#diagonal");

const parseNumber = input => Number(input);

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

const calculaAreaRetangulo = (base, altura) => base * altura;

const calculaPerimetroRetangulo = (base, altura) => (base * 2) + (altura * 2);

const calculaDiagonalRetangulo = (base, altura) => Math.hypot(base, altura);

form.addEventListener("submit", (evente) => {
  evente.preventDefault();
  const inputs = form.querySelectorAll("input");
  verificaInput(inputs);
  const { base, altura } = evente.target;
  const inputBase = parseNumber(base.value.replace(",", "."));
  const inputAltura = parseNumber(altura.value.replace(",", "."));
  const area = calculaAreaRetangulo(inputBase, inputAltura);
  const perimetro = calculaPerimetroRetangulo(inputBase, inputAltura);
  const diagonal = calculaDiagonalRetangulo(inputBase, inputAltura);
  inputArea.textContent = `ÁREA = ${area.toFixed(4)}`;
  inputPerimetro.textContent = `PERÍMETRO = ${perimetro.toFixed(4)}`;
  inputDiagonal.textContent = `DIAGONAL = ${diagonal.toFixed(4)}`;
});
