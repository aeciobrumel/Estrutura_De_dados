//Crie um programa que dado uma string, coloque as letras dela em ordem
//crescente pelo algoritmo Bubblesort
/*

const prompt = require('prompt-read')


txt = prompt("insira uma String para entrar em ordem alfabetica: ",'string')

console.log(txt)
var lista = txt.split("")
console.log(lista)




for(n=1;n<=lista.length; n++){
    for(i=0;i <=lista.length-2;i++){
        if(lista[i]>lista[i+1]){
            let aux = lista[i]
            lista[i] = lista[i+1]
            lista[i+1]=aux
        }


    }

}
console.log(lista)




/*
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////




Faça um programa que leia n nomes inserindo-os em uma lista de forma
ordenada utilizando a ideia do algoritmo Insertionsort. No final, o programa
deve mostrar todos os nomes ordenados alfabeticamente.

// 
const prompt = require('prompt-read')

var texto = prompt("insira n nomes separados por vírgula: ")

console.log(texto)

listadenomes = texto.split(",")





console.log(listadenomes)

for(i=1;i<=listadenomes.length-1;i++){
    eleito = listadenomes[i]
    j = i-1


    while((listadenomes[j]>eleito)&&(j>=0)){
        listadenomes[j+1] = listadenomes[j]
        j=j-1
        
    }
    listadenomes[j+1]= eleito
}
console.log(listadenomes)

/*

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

4. Considere a matriz abaixo onde a 1ª linha representa um identificador de
um nome e a 2ª linha o nome.
/   56    /   109     /   8    /   4    /    71    /  13    /     15  /
/--------/-----------/--------/--------/----------/-------/----------/  
/  Jair  /  Valdir  /   Bia  /   Ana  /   Manoel / Carla /  Carlos  /


Adapte o algoritmo BubbleSort para ordenar esta matriz pelo identificador
do nome e, após a ordenação, exibir os nomes na nova ordem.








 *
*/
const prompt = require('prompt-read')
const ID=0
const NOME=1

let turma=[
    
        [56,"Jair"],
        [109,"Valdir"],
        [8,"Bia"],
        [4,"Ana"],
        [71,"Manoel"],
        [13,"Carla"],
        [15,"Carlos"],
    
    
]

console.log(turma)

for(n=ID; n<=turma.length- NOME ; n++){


    for(i=ID; i<=turma.length-2;i++){
        if (turma[i][ID]>turma[i+1][ID]){
                let aux = turma[i]
                turma[i]= turma[i+1]
                turma[i+1] = aux
            }
    }
}



console.log(turma)
