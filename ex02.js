const prompt = require('prompt-sync')();

let vet = [0, 0, 0], num;

for(let i=0; i<3; i++){
    num = Number(prompt(`Digite o ${i+1} número: `));

    for(let x=0; x<3; x++){
        if(num > vet[x]){
            vet[x+2] = vet[x+1];
            vet[x+1] = vet[x];
            vet[x] = num;
            break
        }
    }
}

console.log(`\nOrdem crescente: ${vet[2]}, ${vet[1]} e ${vet[0]}`);