/*
  O HeapSort é um algoritmo de ordenação que utiliza uma estrutura de dados chamada heap (árvore binária) para ordenar os elementos. O algoritmo divide o array em duas partes: uma parte ordenada e outra parte desordenada. A cada iteração, ele extrai o maior elemento da parte desordenada e o coloca na parte ordenada. O processo é repetido até que todo o array esteja ordenado.

O código apresentado implementa o HeapSort em JavaScript. Ele utiliza três funções principais: transforma_heap, heap e ordena.

*/ 

let pin= [2,3,4,12,4,5,6,8,1]
/*
A função transforma_heap percorre o array a partir da metade e chama a função heap para cada elemento.
 A função heap recebe como parâmetros a posição atual do elemento 
 e a quantidade de elementos que devem ser ordenados. 
 Ela verifica se o elemento da posição i é menor que seus filhos (se houver). 
 Se for o caso, o elemento é trocado com o maior filho e a função heap é chamada novamente para a nova posição do elemento. 
 A função heap é recursiva e continua chamando a si mesma até que a posição atual do elemento seja a correta na heap.
*/ 

function transforma_heap(qtde){
    var i, pai, aux;
    // Transforme o array em uma heap
    for (i = Math.floor(qtde/ 2)-1 ; i >= 0; i--) {
      heap(i, qtde);
    }
}



/*
heap(i, qtde): Esta função recebe como parâmetros a posição atual (i) 
e a quantidade de elementos que devem ser ordenados (qtde).
 A função verifica se o elemento da posição i é menor que seus filhos (se houver). 
 Se for o caso, o elemento é trocado com o maior filho e a função heap é chamada
  novamente para a nova posição do elemento.

*/

function heap(i, qtde) {
    var f_esq, f_dir, maior, aux;
    maior = i;
  
    if (2 * i + 1 <= qtde) {
      f_esq = 2 * i + 1;
      f_dir = 2 * i;
      
      // Verifique se o filho esquerdo é o maior
      if (pin[f_esq] >= pin[f_dir] && pin[f_esq] > pin[i]) {
        maior = 2 * i + 1;
      } 
      // Caso contrário, verifique se o filho direito é o maior
      else if (pin[f_dir] > pin[f_esq] && pin[f_dir] > pin[i]) {
        maior = 2 * i;
      }
      
    } else if (2 * i <= qtde) {
      f_dir = 2 * i;
      // Verifique se o filho direito é o maior
      if (pin[f_dir] > pin[i]) {
        maior = 2 * i;
      }
    }
    // Se o nó atual não for o maior, troque-o com o maior filho e chame heap novamente
    if (maior != i) {
      aux = pin[i];
      pin[i] = pin[maior];
      pin[maior] = aux;
      heap(maior, qtde);
    }
  }



/*
A função ordena começa chamando a função transforma_heap para transformar o array em uma heap.
 Em seguida, ela ordena o array transformando-o em uma heap e trocando o primeiro elemento com o último. 
 Depois disso, ela chama a função heap para ajustar a posição do primeiro elemento. 
 O processo é repetido até que todo o array esteja ordenado.

*/ 

  function ordena(qtde) {

    var i, aux, ultima_posi;
    
   transforma_heap(qtde); 
    // Ordena o array transformando-o em uma heap e trocando o primeiro elemento com o último
    for (i = qtde -1; i >= 1; i--) {
      aux =pin[0];
     pin[0] =pin[i];
     pin[i] = aux;
      ultima_posi = i - 1;
      heap(0, ultima_posi);
    }
  }




  /*
  
A última linha do código exibe o array pin já ordenado na tela 
usando a função console.log.
  */ 
  console.log("Array original: ", pin);

  ordena(pin.length);
  console.log("Array ordenado: ", pin);






