// FUNCTIONS

const prompt = require("prompt-read")
function message(msg, timems) {
    var time = timems == undefined ? 2000 : timems
    console.log("\nMessage: ", msg)
    sleep(time)
    }
    function sleep(ms) {
    const date = Date.now();
    let currentDate = null;
    do {
    currentDate = Date.now();
    } while (currentDate - date < ms);
    }

//Queue
class Queue {
    constructor() {
    this.count = 0 //indice co item
    this.lowestCount = 0 //menor valor dalista para sabermos qual tirar
    this.items = {} //itens vao ficar como objeto
    }
        enqueue(element) { //metodo para add elementos na fila
        this.items[this.count] = element //aqui passamos o item relacionando-o com um numero indice que estiver no contador  //
        this.count++ //aumentamos um numero do contador para quando acrecentarmos um proximo elemento, ele ficasr relacionado a outro numero
        }
        dequeue() {//retiramos o valor do final da fila
            if (this.isEmpty()) {//se estiver vazia retorna indefinido
                return undefined
                }
                const result = this.items[this.lowestCount]//se nao, guardamos o resultado para depois o removermos 
                delete this.items[this.lowestCount]//removemos o primeiro item da fila
                this.lowestCount++//o menor item agora é o proximo
          return result//retornaamos o resultado
        }
        peek() {
                    if (this.isEmpty()) {
                    return undefined
                    }
                    return this.items[this.lowestCount]//retornamos o valor sem retira-lo(o menor da fila)
        }
        isEmpty () {
                        return this.size() === 0
        }
        size() {
                return this.count - this.lowestCount //o tamanho é o contador de numero da fila menos o contador do menot
        }
        toString () {
        let arr = []
        for(let i = this.lowestCount; i < this.count; i++) {
            arr.push(this.items[i])//usamos push para adicionar o valor em um array e podermos, mostra-lo
            }
            return arr.toString()
        }       
                
    }


    // MAIN
var queue = new Queue()
// Menu
do {
console.clear()
console.log("FILA FIFO")
console.log("=============================\n")
console.log(" FILA: [" + queue.toString() + "]\n")
console.log("** OPERAÇÕES **")
console.log("1 - Inserir")
console.log("2 - Remover")
console.log("5 - Tamanho")
console.log("7 - Limpar")
console.log("9 - Sair")
var option = prompt("Opção: ", "number")


switch(option) {
    case 1:
        var element = prompt("Elemento: ")
        queue.enqueue(element)
        message("Elemento inserido!!!")
        break
    case 2:
        var element = queue.dequeue()
        if ( element !== undefined) {
        message("Elemento " + element + " removido!")
        } else {
        message("Fila está vazia!")
        }
        break
    case 5:
        message("Existem " + queue.size() + " elementos.")
        break
    case 7:
        queue = new Queue()
        break
    case 9:
        console.clear()
    break
    default:
    message("Opção inválida!")
    }
    } while (option != 9)