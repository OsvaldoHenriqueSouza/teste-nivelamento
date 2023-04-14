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