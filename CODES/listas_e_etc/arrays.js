


const prompt = require('prompt-read')


//constantes

const ID = 0
const NOME = 1

//database

let alunos = [
[1,"elmario"],
[4,"jose"],

[3,"ja[s"],
[67,"pis"],
[5,"BANA"],
[3,"gustavo"]

]



//main
console.log(alunos);



for( i =ID; i<=alunos.length - NOME;i++){
    console.log(alunos[i][ID]);
}

