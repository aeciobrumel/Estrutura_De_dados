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
   var firstPRIORI = false //boolean para testar se prioritario ja foi retirado
   var prioritaria = new Queue()
   var normal = new  Queue()
   // Menu
   do {
   console.clear()
   console.log("ragatanga pt/2")
   console.log("=============================\n")
   console.log("FILA Prioritaria: \n[" + prioritaria.toString() + "]\n")
   console.log("FILA Normal:      \n[" + normal.toString() + "]\n")
   console.log("** OPERAÇÕES **")
   console.log("1 - Inserir")
   console.log("2 - Remover")
   console.log("9 - Sair")
   var option = prompt("Opção: ", "number")
   
   
   switch(option) {
       case 1:
           console.clear()
           console.log("** OPERAÇÕES **")
           console.log("1 - Fila prioritária")
           console.log("2 - Fila Normal")
           var opcao = prompt("Opção: ", "number")
   
           if(opcao==1 | opcao==2){
               if(opcao==1){
                   var element = prompt("Elemento: ")
                    prioritaria.enqueue(element)
                    message("inserido na fila Prioritária!!!")
               }else{
                   var element = prompt("Elemento: ")
                   normal.enqueue(element)
                   message("inserido na fila Normal!!!")
               }
           }else{
               message("opção inválida")
           }
   
           
           break
       case 2:




        
         
        if ( firstPRIORI == false) {//se não foi retirado cai nesse laço

            var elementP = prioritaria.dequeue()//guardo elemento em variavel para jogar na tela antes de remove-lo
            if ( elementP !== undefined) {
                message("Elemento " + elementP + " removido DA PRIORI!")//jogo na tela
            }else {
                //se cair aqui prioritaria ta vazio então retiro elemento  da normal
                    var elementN = normal.dequeue()
                    message("Elemento " + elementN + " removido DA NORMAL!")
                    }
            firstPRIORI = true //retorno true para indicar que retirei elemento da prioritaria
        }else {
            var elementN = normal.dequeue()
            if ( elementN !== undefined) {
                message("Elemento removido DA NORMAL!")
            }else {
                    message("Fila está vazia!")
                    }
            firstPRIORI=false//retorno falso para poder retirar novamente do prioritario...
        }
           break
       case 9:
           console.clear()
       break
       default:
       message("Opção inválida!")
       }
       } while (option != 9)
