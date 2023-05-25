//
// Lista Encadeada Simples
//
//

// Load Modules
const prompt = require('prompt-read')

// CLASSES
// LinkedList
class LinkedList {
    constructor() {
        this.count = 0
        this.head = undefined
    }

    push(element) {
        const node = new Node(element)
        let current

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }

        this.count++
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (element == current.element) return i
            current = current.next
        }
        return -1
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index == 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return true
        }
        return false
    }

    remove(element) {
        let index = this.indexOf(element)
        if (index != -1) {
            this.removeAt(index)
            return true
        } else {
            return false
        }
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)

            if (index == 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }

    isEmpty() {
        return this.size() == 0
    }

    size() {
        return this.count
    }

    toString() {
        let arr = []

        let current = this.head
        for (let i = 0; i < this.size(); i++) {
            arr.push(current.element)
            current = current.next
        }

        return arr.toString()
    }
}

// Node
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

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

function wait() {
    var p = prompt("Press Enter to continue...")
}

// MAIN
var list = new LinkedList()

// Menu
do {
    console.clear()
    console.log("   LISTA ENCADEADA SIMPLES")
    console.log("=============================\n")
    console.log(" LISTA: [" + list.toString() + "]\n")
    console.log("** OPERAÃ‡Ã•ES **")
    console.log("1 - Inserir")
    console.log("2 - Inserir na PosiÃ§Ã£o")
    console.log("3 - Remover")
    console.log("4 - Remover da PosiÃ§Ã£o")
    console.log("5 - Tamanho")
    console.log("6 - Procurar")
    console.log("7 - Apagar Lista")
    console.log("8 - Ordenar")
    console.log("9 - Sair")
    var option = prompt("OpÃ§Ã£o: ", "number")

    switch (option) {
        case 0: // test mode
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
            var element = prompt("Elemento: ")
            var index = prompt("Indice: ")
            if (list.insert(element, index)) {
                message("Elemento " + element + " inserido na posiÃ§Ã£o " + index)
            } else {
                message("Erro ao inserir!")
            }
            break
        case 3:
            var element = prompt("Elemento: ")
            if (list.remove(element)) {
                message("Elemento removido!")
            } else {
                message("Elemento nÃ£o existe!")
            }
            break
        case 4:
            var index = prompt("Indice: ")
            if (list.removeAt(index)) {
                message("Elemento removido da posiÃ§Ã£o " + index + "!")
            } else {
                message("Erro ao remover!")
            }
            break
        case 5:
            message("Existem " + list.size() + " elementos.")
            break
        case 6:
            var element = prompt("Procurado: ")
            var position = list.indexOf(element)
            if (position != -1) {
                message("Elemento " + element + " encontrado na posiÃ§Ã£o " + position)
            } else {
                message("Elemento nÃ£o encontrado!")
            }
            break
        case 7:
            list = new LinkedList()
            break
        case 9:
            console.clear()
            break
        default:
            message("OpÃ§Ã£o invÃ¡lida!")
    }

} while (option != 9)