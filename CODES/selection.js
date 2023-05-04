
const prompt = require('prompt-read')


var x=[5,8,2,6,1,9]
console.log(x)



for(i=0;i<=x.length-1;i++){
eleito = x[i]
menor = x[i+1]
pos = i+1


for(j=i+2; j<=x.length;j++){
    if (x[j]<menor){
        menor = x[j]
        pos = j
    }
}
if(menor<eleito){
    x[i]= x[pos]
    x[pos]=eleito
}
}
//x=
/*
repete numero do array menos 1
eleito recebe primeira posiçao 
menor recebe o segundo posiçao
 e posiçaoi recebe o valor da repetiçao mais 1


   j recebe repetiçao mais 2 e enquanto for menor igual o array ele repete dnv

    se posiçao j for menor que menor

    menor recebe posiçao j 
    posiao guarda j


    se menor for menor que o eleiro 
    repetiçao recebe posiçao posiçao

    e posiçao posiçao recebe eleito

*/







/*



início









fim




fim


*/ 

    console.log(x)