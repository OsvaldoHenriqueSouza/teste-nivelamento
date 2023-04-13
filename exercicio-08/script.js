const form = document.body.querySelector("form");
const resultadoA = document.body.querySelector("#resultadoA");
const resultadoB = document.body.querySelector("#resultadoB");
const resultadoC = document.body.querySelector("#resultadoC");
// const resultados = document.body.querySelector(".resultados");
const input = form.querySelectorAll("input");

const parseNumber = input => Number(input);

const calculaAreaQuadrado = lado => lado ** 2;

const calculaAreaTriangulo = (base, altura) => (base * altura) / 2;

const calculaAreaTrapezio = (baseMaior, baseMenor, altura) =>
  (baseMaior + baseMenor) * altura / 2;

verificaInput(input);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { medidaA, medidaB, medidaC } = event.target;
  const inputMedidaA = parseNumber(medidaA.value.replace(",", "."));
  const inputMedidaB = parseNumber(medidaB.value.replace(",", "."));
  const inputMedidaC = parseNumber(medidaC.value.replace(",", "."));
  const areaQuadrado = calculaAreaQuadrado(inputMedidaA).toFixed(4);
  const areaTriangulo = calculaAreaTriangulo(inputMedidaA, inputMedidaB).toFixed(4);
  const areaTrapezio = calculaAreaTrapezio(inputMedidaA, inputMedidaB, inputMedidaC).toFixed(4);
  resultadoA.textContent = `ÁREA DO QUADRADO = ${areaQuadrado}`;
  resultadoB.textContent = `ÁREA DO TRIÂNGULO = ${areaTriangulo}`;
  resultadoC.textContent = `ÁREA DO TRAPÉZIO = ${areaTrapezio}`;
});
