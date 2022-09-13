const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

if(numero % 2 == 0){
    console.log('\nO número ' + numero  + ' é par!');
    console.log('A raiz quadrada do número é: ' + (Math.sqrt(numero)).toFixed(2) );
}
else{
    console.log('\nO número ' + numero + ' é impar!');
    console.log('O númeto elevado ao quadrado é: ' + (Math.pow(numero, 2)).toFixed(2) );
}