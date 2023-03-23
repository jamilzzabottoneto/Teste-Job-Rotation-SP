/* Exercicio 02  - Teste Job Rotation - Sao Paulo*/
let entrada = 15
let resultado = [];

function fibonacci(valor){
    if(valor < 2){
        return valor;
    }
    else{
        for (let index = 0; index < valor; index++) {
            resultado[index] = fibonacci(valor - 1) + fibonacci(valor - 2);            
        }
        return fibonacci(valor - 1) + fibonacci(valor - 2);
    }
}

console.log(fibonacci(entrada));

for (let index = 0; index < resultado.length; index++) {
    console.log(resultado[index]);

    if(resultado[index] == entrada){
        console.log("Pertence a Sequencia de fibonacci")
    }else{
        console.log("Não Pertence a Sequencia de fibonacci")
    }
}