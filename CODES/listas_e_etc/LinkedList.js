//

// Lista Encadeada Simples
//
//


//funçoes para o menu:///////////////////////////////

//mensagem
function message(msg, timems){
    var time = timems == undefined ? 2000 : timems
    console.log("Message: ",msg)
    sleep(time)
}

//pause



function sleep(ms){
    const date = Date.now();
    let currentDate =null;
    do{
        currentDate = Date.now();
    }while(currentDate - date<ms);
}
//FUNÇÃO DEMORA O TEMPO
function wait() {
    var p = prompt("Press Enter to continue...")
}

//CRIAÇÕES DAS CLASSES:

class Node{
    constructor(element){
        this.element=element
        this.next=undefined
        
    }
}


class LinkedList{
    constructor(){
        this.count=0
        this.head=undefined
    }


//ordena os elementos da lista
////////////////////////////////////////////////////////////////////////////////
//mas eu não estudei ainda
////////////////////////////////
mergeSort() {
    this.head = this.mergeSortRec(this.head);
  }

  // Função auxiliar para realizar a ordenação por Merge Sort
  mergeSortRec(head) {
    // Caso base: se a lista está vazia ou tem apenas um elemento, retorna a lista
    if (head == null || head.next == null) {
      return head;
    }

    // Divide a lista em duas metades
    let mid = this.getMiddle(head);
    let midNext = mid.next;
    mid.next = null;

    // Aplica a recursão nas duas metades
    let left = this.mergeSortRec(head);
    let right = this.mergeSortRec(midNext);

    // Combina as duas metades ordenadas
    return this.merge(left, right);
  }

  // Função auxiliar para encontrar o elemento do meio da lista
  getMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  // Função auxiliar para realizar o merge de duas listas ordenadas
  merge(left, right) {
    let sorted = null;

    // Caso base: se alguma das listas é nula, retorna a outra lista
    if (left == null) {
      return right;
    }
    if (right == null) {
      return left;
    }

    // Escolhe o menor elemento entre as duas listas e realiza o merge recursivamente
    if (left.element <= right.element) {
      sorted = left;
      sorted.next = this.merge(left.next, right);
    } else {
      sorted = right;
      sorted.next = this.merge(left, right.next);
    }

    return sorted;
  }


/////////////////////////////////////////////////////////////////////////////////
//método acrescenta elemento no final da lista
    push(element){
        const node = new Node(element);
        let current = this.head

        if(current==null){ //se nao tiver um elemento cria um nó no inicio
            this.head = node
        }else{//se houver, percorre a lista ate o ultimo elemento, qwuando o proximo for null
            current = this.head
            while(current.next!=null){
                current=current.next
            }
            current.next=node //adiciona um nó no ultimo elemento
        }
        this.count++//aumenta a contagem

    }
//método consegue elemento pelo indice
getElementAT(index){
    //testa se o indice passado está dentro dos limites da lista
    if(index>=0 && index <= this.count){
        let node = this.head
        for(let i=0;i<index && node!=null;i++){
            node=node.next
            //percorre a lista até o indice verificando se não esta no fim
        }

        return node //retorna o valor se for verdade
        }
        return undefined //se não der bom retorna indefinido

    }


//método que retorna o indice do elemento passado
indexOf(element){
    let current = this.head
    for(let i=0; i<this.count && current!=null;i++){
        //percorre cada elemento da lista
        if(element==current.element)return i//se o elemento for igual, retorna o mesmo
        current = current.next //se não for, passa para o próximo elemento

        }
        return -1//retorna -1 se não encontrar o elemento.
    }


//método remove pelo indice
removeAt(index){
    if(index>=0 && index<this.count){
        //verifica se o indice está dentro da lista
        let current=this.head
        if(index===0){//se for o primeiro, pula o mesmo setando o prõximo
            this.head=current.next
        }else{//se não for o primeiro
            let previous=this.getElementAT(index-1)//previous pega o elemento anterior do selecionado com metodo getElementAt
            current=previous.next // 
            previous.next=current.next
            //setamos o elimento anterior ao indice com o próximo
        }
        this.count-- //reduzimos a contagem
        return true//retornamos verdadeiro
    }
    return false//se não for encontrado retornamos falso
}


//metodo que remove o elemento pelo elemento mesmo
remove(element){
    let index = this.indexOf(element)
    //pega o indice do elemento usando o indexOF
    if(index!=-1){//se o indice for válido
        this.removeAt(index)
        return true //remove o elemento pelo indice usando o método removeAt
    }else{
        return false//se nçao der bom, retorna falso
    }
}
//metodo que insere elemento no indice desejado

insert(element,index){
    //passa o elemento e o indice onde ele deve ser colocado
    if(index>=0 && index<=this.count){
        //verifica se o indice é válido
        const node = new Node(element)
        if (index==0){//se for no primeiro elemento
            const current =this.head
            node.next=current
            this.head=node
            //ele seta o proximo do elemento ao primeiro da lista e se torna o head(primeiro)
            //praticamente se enfiando no inicio
        }else{
            const previous = this.getElementAT(index-1)//conseguimos o elemento anterior com metodo menos 1
            const current = previous.next 
            node.next = current
            previous.next = node
            //pegamos o elemento anterior ao do indice indicado
            //setamos o próximo dele no que queremos inserir
            //e setamos o proximo do que queremos inserir ao que seria o da posição que queremos
            //enfiando no meio rs
        }
        this.count++ //aumentamos a contagem de elementos
        return true//retornamos verdadeiro

    }
    return false//se nçao der certo retornamos falso
}
//métodos adicionais:

//se estiver vazio
isEmpty(){
    return this.size()===0
    //retorna o tamanho igual a 0
}

//tamanho da lista
size(){
    return this.count
}
//ajeita a lista em um array visivel

toString(){
    let arr=[]//criamos um array para  mostrar a lista
    
    let current = this.head
    for(let i=0;i<this.size();i++){//repetimos enquanto i for do tamanho do array
    arr.push(current.element)//damos um push para add o elemento da lista no array
    current = current.next//passamos para o proximo item
}
return arr.toString() //retornamos o array com os itens da lista
}

}//fim da classe LinkedList







//main
var list = new LinkedList() //criação de um objeto lista



//menu

const prompt = require("prompt-read")



do{
    
    console.clear()
    console.log("   LISTA ENCADEADA SIMPLES    ")
    console.log("Lista [" + list.toString() + "]\n")
    console.log("============================\n")
    console.log("OPERAÇÕES:                 \n")
    console.log("1 - Inserir")
    console.log("2 - Inserir na Posição")
    console.log("3 - Remover")
    console.log("4 - Remover da Posição")
    console.log("5 - Tamanho")
    console.log("6 - Procurar")
    console.log("7 - Apagar Lista")
    console.log("8 - Ordenar")
    console.log("9 - Sair")
    var op =prompt("insira a opção: ","number")

    switch(op){

        case 0:// test mode
            list.push(4)
            list.push(2)
            list.push(5)
            list.push(1)
            break

        case 1:
            var element = prompt("Elemento: ")
            list.push(element)
            message("Elemento inserido!!!")
            break

        case 2: 
        var element = prompt("Elemento:")
        var index = prompt("Indice: ")
        if(list.insert(element,index)){
            message("Elemento: "+element+" inserido na posição: "+index)
        }else{
            message("Erro ao inserir")
        }

            break

        case 3:
            var element = prompt("Elemento:")
            if(list.remove(element)){
                message("Removido com sucesso")
            }else{
                message("erro ao remover elemento....")
            }

            break

        case 4: 
            var index = prompt("indice: ")
            if(list.removeAt(index)){
                message("Removido com sucesso")
            }else{
                message("Erro ao remover...")
            }
            break

        case 5:
            message("existem "+list.size()+" elementos")
            break

        case 6: 
            var element = prompt("Elemento: ")
            var position = list.indexOf(element)
            if(position !=-1){
                message("elemento "+element+" encontrado na posição "+position)
            }else{
                message("elemento não encontrado...")
            }
            break

        case 7:
            list=new LinkedList()
            break
        case 8:
            list.mergeSort();
        message("Lista ordenada pelo Merge Sort.");
            break

        case 9:
        message("encerrando programa...")
            console.clear()
            break

        default:
            message("opção inválida!!!")
    }

}while(op!=9)