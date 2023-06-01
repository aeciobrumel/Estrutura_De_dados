// FUNCTIONS
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
    this.count = 0
    this.lowestCount = 0
    this.items = {}
    }
        enqueue(element) {
        this.items[this.count] = element
        this.count++
        }
        dequeue() {
            if (this.isEmpty()) {
                return undefined
                }
                const result = this.items[this.lowestCount]
                delete this.items[this.lowestCount]
                this.lowestCount++
          return result
        }
        peek() {
                    if (this.isEmpty()) {
                    return undefined
                    }
                    return this.items[this.lowestCount]
        }
        isEmpty () {
                        return this.size() === 0
        }
        size() {
                return this.count - this.lowestCount
        }
        toString () {
        let arr = []
        for(let i = this.lowestCount; i < this.count; i++) {
            arr.push(this.items[i])
            }
            return arr.toString()
        }       
                
    }


    // MAIN
var fila = new Queue()
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