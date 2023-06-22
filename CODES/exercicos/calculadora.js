
//carregar modulo
const prompt = require('prompt-read')


//
console.log("----------------------------");

console.log("calculo de notas");
console.log("----------------------------");
var n1 = prompt("insira a nota 1 : ","number");
var n2 = prompt("insira a nota 2 : ","number");
console.log("----------------------------");

console.log("----------------------------");
var soma = n1+n2
if(soma < 6){
resultado = "reprovado" 
} else{
    resultado = "aprovado"
};
console.log("----------------------------");

console.log("RESULTADO");
console.log("----------------------------");

console.log("você foi ",resultado," e sua nota é: ",soma  );