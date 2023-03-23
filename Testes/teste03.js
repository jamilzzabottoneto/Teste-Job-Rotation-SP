/* Exercicio 03  - Teste Job Rotation - Sao Paulo*/

const fs = require("fs");
const caminho = __dirname + "/dados.json";

fs.readFile(caminho, "utf-8", (err, data) => {
  if (err) {
    console.log("Erro ao abrir o arquivo");
  }

  const conteudo = JSON.parse(data);

  let menorValor = 0;
  let maiorValor = 0;
  let diasZerado = 0;

  for (const iterator of conteudo) {
    
    if (iterator.valor > 0) {
      menorValor = Math.min(iterator.valor);
    }

    maiorValor = Math.max(iterator.valor);

    if (iterator.valor == 0) {
      diasZerado++;
    }
  }
  console.log(`Menor Valor: ${menorValor}`);
  console.log(`Maior Valor: ${maiorValor}`);
  console.log(`Dias no Zero: ${diasZerado}`);
});
