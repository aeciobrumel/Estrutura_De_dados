// calculadora

const entrada = require('prompt-read')
console.log(v1);


let x = prompt ("digite os numeros do array separados por espaço: ","arrayofnumber")


console.log(x)
// 


console.log("1 receba a array ordenada de forma decrescente")
console.log("2 receba a array ordenada de forma crescente")
 var op = prompt("escolha uma opção: ","number")
 
 
 switch (op) {
    case 1:

    troca = 1 
n=1




while (n<=x.length && troca ==1) {
    

troca = 0

for (n=1;n<=x.length;n++){
    for (i=0;i<=x.length-2;i++){

        if (x[i] < x[i+1]){

            let aux = x[i]

            x[i] = x[i+1]

            x[i+1]=aux

                troca = + 1
        }
    }

    n++
}

}
console.log(x)

        
        break;
    case 2:

    troca = 1 
n=1




while (n) {
    

troca = 0

for (n=1;n<=x.length;n++){
    for (i=0;i<=x.length-2;i++){

        if (x[i] > x[i+1]){

            let aux = x[i]

            x[i] = x[i+1]

            x[i+1]=aux

                troca = + 1
        }
    }

    n++
}

}
console.log(x)


        break;

    default:
        console.log("erro")
        break;
}

