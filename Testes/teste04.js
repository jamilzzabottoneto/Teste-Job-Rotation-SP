/* Exercicio 04  - Teste Job Rotation - Sao Paulo*/

const valorSP = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const totalPorcentagem = 100;

let total = valorSP + rj + mg + es + outros;

let percentualSP = (totalPorcentagem * valorSP) / total;
console.log("SP - " + percentualSP.toFixed(2) + "%")

let percentualRJ = (totalPorcentagem * rj) / total;
console.log("RJ - " + percentualRJ.toFixed(2) + "%")

let percentualMG = (totalPorcentagem * mg) / total;
console.log("MG - " + percentualMG.toFixed(2) + "%")

let percentualES = (totalPorcentagem * es) / total;
console.log("ES - " + percentualES.toFixed(2) + "%")

let percentualOutros = (totalPorcentagem * outros) / total;
console.log("Outros - " + percentualOutros.toFixed(2) + "%")