/* Exercicio 05  - Teste Job Rotation - Sao Paulo*/

let texto = "jamil";

let letra = [];
let resultado = "";

for (let index = 0; index < texto.length; index++) {
    letra[index] = texto.charAt(index)

    console.log("Posição: [" + index + "] - " + letra[index])
}

console.log("\n------------------------------------------------------------\n")

for (let i = texto.length; i >= 0; i--) {
        
        resultado += letra[i];
    }

console.log(resultado)