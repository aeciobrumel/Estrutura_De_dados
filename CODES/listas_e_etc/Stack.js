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

//CLASSE STACK
class Stack {
    constructor() {
        this.count = 0
        this.items = {}
        }
            push(element) {
            this.items[this.count] = element
            this.count++
            }
            pop() {
                if (this.isEmpty()) {
                    return undefined
                    }
                    const result = this.items[this.count]
                    delete this.items[this.count]
                    this.count--
              return result
            }
        peek() {
                    if (this.isEmpty()) {
                    return undefined
                    }
                    return this.items[this.count-1]

        }
        isEmpty () {
                        return this.size() === 0
        }
        size() {
                return this.count
        }
        toString () {
        let arr = []
        for(let i = 0; i < this.count; i++) {
            arr.push(this.items[i])
            }
            return arr.toString()
        }       
                
    }


    // MAIN
    var stack = new Stack();
// Menu
do {
console.clear()
console.log("FILA FILO")
console.log("=============================\n")
console.log(" FILA: [" + stack.toString() + "]\n")
console.log("** OPERAÇÕES **")
console.log("1 - Inserir")
console.log("2 - Remover")
console.log("3 - Ver ultimo item")
console.log("5 - Tamanho")
console.log("7 - Limpar")
console.log("9 - Sair")
var option = prompt("Opção: ", "number")


switch(option) {
    case 1:
        var element = prompt("Elemento: ")
        stack.push(element)
        message("Elemento inserido!!!")
        break
    case 2:
        var n =stack.peek() 
        var element = stack.pop()
        if ( element !== undefined) {
        message("Elemento " + n + " removido!")
        } else {
        message("Fila está vazia!")
        }
        break
    case 3:
        message("o numero do topo da pilha é " + stack.peek() )
        break
    case 5:
        message("Existem " + stack.size() + " elementos.")
        break
    case 7:
        stack = new Stack()
        break
    case 9:
        console.clear()
    break
    default:
    message("Opção inválida!")
    }
    } while (option != 9)