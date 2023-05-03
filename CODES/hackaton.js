

//nomes: Aécio Brumel, João  Wesley, Nicoly Carioli, Yago Russo


//Persons: tabela de pessoas com seus respectivos dados dados (id, nome, idade)
const prompt = require("prompt-read")

const persons = [
    { id: 2, nome: "Friedrich Gauss", idade: 33 },
    { id: 1, nome: "Isaac Newton", idade: 28 },
    { id: 3, nome: "Marie Curie", idade: 29 },
    { id: 4, nome: "Hedy Lamarr", idade: 23 },
    { id: 5, nome: "Albert Einstein", idade: 39 },
    { id: 7, nome: "Galileu Galilei", idade: 25 },
    { id: 10, nome: "James Clerk Maxwell", idade: 25 },
    { id: 9, nome: "AndrÃ©-Marie AmpÃ¨re", idade: 23 },
    { id: 11, nome: "James Prescott Joule", idade: 33 },
    { id: 6, nome: "Nicolau Copernico", idade: 30 },
    { id: 13, nome: "Archimedes de Siracusa", idade: 39 },
    { id: 8, nome: "Alexander Volta", idade: 36 },
    { id: 12, nome: "James Watt", idade: 23 },
    { id: 14, nome: "Simom Ohm", idade: 35 }
]

//Chave: opção de qual dado será selecionado para colocar em ordem
console.log("Chaves disponíveis: ID, nome e idade.")
const chave = prompt ("Deseja ordenar por qual chave? ")
console.log("ordem crescente ou decrescente /n")
console.log("ordem decrescente -1 /n")
console.log("ordem crescente   -2 /n")

var op = prompt("insira aqui: ",'number')



function transforma_heap(qtde){
  var i, pai, aux;
  // Transforme o array em uma heap
  for (i = Math.floor(qtde/ 2)-1 ; i >= 0; i--) {
    heap(i, qtde);
  }
}



function heap(i, qtde) {
  var f_esq, f_dir, maior, aux;
  maior = i;

  if (2 * i + 1 <= qtde) {
    f_esq = 2 * i + 1;
    f_dir = 2 * i;
    
    // Verifique se o filho esquerdo é o maior
    if (persons[f_esq][chave] >= persons[f_dir][chave] && persons[f_esq][chave] > persons[i][chave]) {
      maior = 2 * i + 1;
    } 
    // Caso contrário, verifique se o filho direito é o maior
    else if (persons[f_dir][chave] > persons[f_esq][chave] && persons[f_dir][chave]> persons[i][chave]) {
      maior = 2 * i;
    }
    
  } else if (2 * i <= qtde) {
    f_dir = 2 * i;
    // Verifique se o filho direito é o maior
    if (persons[f_dir][chave] > persons[i][chave]) {
      maior = 2 * i;
    }
  }
  // Se o nó atual não for o maior, troque-o com o maior filho e chame heap novamente
  if (maior != i) {
    aux = persons[i][chave];
    persons[i][chave] = persons[maior][chave];
    persons[maior] [chave]= aux;
    heap(maior, qtde);
  }
}




function ordena(qtde) {

  var i, aux, ultima_posi;
  
 transforma_heap(qtde); 
  // Ordena o array transformando-o em uma heap e trocando o primeiro elemento com o último
  for (i = qtde -1; i >= 1; i--) {
    aux =persons[0][chave];
   persons[0][chave] =persons[i][chave];
   persons[i][chave] = aux;
    ultima_posi = i - 1;
    heap(0, ultima_posi);
  }
}

if(op==1){


  console.log("Array original: ", persons);
  ordena(persons.length);
  console.log("Array ordenado: ", persons);
  
}else{

  console.log("Array original: ", persons);
  ordena(persons.length);
  persons.reverse();
  console.log("Array ordenado: ", persons);
}









