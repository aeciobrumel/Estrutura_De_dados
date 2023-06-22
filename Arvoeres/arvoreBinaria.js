//
// Ãrvore BinÃ¡ria
// Prof. ElmÃ¡rio Dutra
//

// CLASSES
//BinarySearchTree
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // esse mÃ©todo insere uma nova chave na Ã¡rvore.
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    // mÃ©todo auxiliar do insert
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left === null) {
                node.left = new Node(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else if (key > node.key) {
            if (node.right === null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }

    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) {
            return false
        }

        if (key < node.key) {
            return this.searchNode(node.left, key)
        } else if (key > node.key) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }

    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }

    inOrderTraverseNode(node) {
        if (node != null) {
            this.inOrderTraverseNode(node.left)
            console.log(node.key)
            this.inOrderTraverseNode(node.right)
        }
    }

    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }

    preOrderTraverseNode(node) {
        if (node != null) {
            console.log(node.key)
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }

    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }

    postOrderTraverseNode(node) {
        if (node != null) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log(node.key)
        }
    }

    min() {
        return this.minNode(this.root)
    }

    minNode(node) {
        let current = node
        while (current != null && current.left != null) {
            current = current.left
        }
        return current
    }

    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        let current = node
        while (current != null && current.right != null) {
            current = current.right
        }
        return current
    }

    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        if (node == null) return null

        if (node.key > key) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (node.key < key) {
            node.right = this.removeNode(node.right, key)
            return node
        } else {
            // Caso 1
            if (node.left == null && node.right == null) {
                node = null
                return node
            }

            // Caso 2
            if (node.left == null) {
                node = node.right
                return node
            } else if (node.right == null) {
                node = node.left
                return node
            }

            // Caso 3
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
}

//Node
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

// IMPORTS
const prompt = require("utils/prompt")

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
var bst = new BinarySearchTree()

// Menu
do {
    console.clear()
    console.log("   ARVORE BINARIA")
    console.log("** OPERAÃ‡Ã•ES **")
    console.log("1 - Inserir")
    console.log("2 - Remover")
    console.log("3 - Procurar")
    console.log("4 - Visualizar in-order")
    console.log("5 - Visualizar pre-order")
    console.log("6 - Visualizar post-order")
    console.log("7 - Limpar")
    console.log("8 - MÃ­nimo e MÃ¡ximo")
    console.log("9 - Sair")
    var option = prompt("OpÃ§Ã£o: ", "number")
    switch (option) {
        case 0:
            // const aux = [11, 7, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25]
            // aux.forEach(function (v) { bst.insert(v) })
            bst.insert(6)
            bst.insert(2)
            bst.insert(8)
            bst.insert(1)
            bst.insert(4)
            bst.insert(3)
            bst.insert(8)
            break
        case 1:
            var element = prompt("Elemento: ", "number")
            bst.insert(element)
            message("Elemento inserido!!!")
            break
        case 2:
            var element = prompt("Elemento: ", "number")
            bst.remove(element)
            message("Ãrvore atualizada!")
            break
        case 3:
            var element = prompt("Elemento: ", "number")
            if (bst.search(element)) {
                message("Elemento encontrado!!")
            } else {
                message("Elemento nÃ£o existe!!")
            }
            break
        case 4:
            bst.inOrderTraverse()
            wait()
            break
        case 5:
            bst.preOrderTraverse()
            wait()
            break
        case 6:
            bst.postOrderTraverse()
            wait()
            break
        case 7:
            bst = new BinarySearchTree()
            break
        case 8:
            console.log(bst.min())
            message("MÃ­nimo: " + bst.min().key, 0)
            message("MÃ¡ximo: " + bst.max().key, 0)
            wait()
            break
        case 9:
            console.clear()
            break
        default:
            message("OpÃ§Ã£o invÃ¡lida!")
    }
} while (option != 9)