const prompt = require('prompt-sync')();

let maior=0, pergunta;

for(let i=0; i<3; i++){
    pergunta = Number(prompt(`Digite o número ${(i+1)}: `));
    if(pergunta > maior){
        maior = pergunta;
    }
}

console.log(`\nO maior número é: ${maior}`);