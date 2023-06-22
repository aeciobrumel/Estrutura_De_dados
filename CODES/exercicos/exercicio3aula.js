
//carregar modulo
const prompt = require('prompt-read')


//

/*


1. Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.
console.log();

var v1 = prompt("insira o valor aqui.", "number");
v2=v1-1

console.log("o numero antecessor é:"+v2);       

////////////////////////////////////////////////////////
2. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e
escrever a área do retângulo.



console.log("vamos calcular a area de um retangulo");

var base, altura, area

base = prompt("insira a base: ", "number");
altura = prompt("insira a altura:", "number");

area= base*altura


console.log("a area é :"+area)

///////////////////////////////////////////////////////////////////////

3. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês
com 30 dias.






console.log("vamos ver quantos dias voce tem.");
var ano, mes, dia, resultado 



ano = prompt("insira a sua idade em anos: ", "number");

mes = prompt("insira a sua idade em meses: ", "number");

dia = prompt("insira a sua idade em dias: ", "number");

resultado = (ano*365)+(mes+30)+dia


console.log("voce tem: "+resultado);

//////////////////////////////////////////////////////////////////////////
4.Escreva um algoritmo para ler o número total de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.


*/

//inserçao de arrey pelo prompt-read
let x = prompt ("digite os numeros do array separados por espaço: ","arrayofnumber")


console.log(x)
// /*
    troca = 1 
n=1




while (n<=x.length && troca ==1) {
    troca = 0 

    for (n=1;n <=x.length; n++){
        for (i=0;i<=x.length-2;i++){
    
            if (x[i] > x[i+1]){
                troca = + 1
                let aux = x[i]
    
                x[i] = x[i+1]
    
                x[i+1]=aux
    
                    
            }
        }
    }
    
}


   /*

   */ 


console.log(x)

     