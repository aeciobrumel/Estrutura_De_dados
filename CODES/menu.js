const prompt = require('prompt-read')


//
console.log("----------------------------");



do {
    console.clear
    
console.log("menu");
console.log("----------------------------");
console.log("1-insere");
console.log("2-edita");
console.log("3-deleta");
console.log("9-sai");

var op = prompt("insira a opcao: ","number");
switch (op) {
    case 1:
            console.log(" a opção selecionada foi: --insira--");
        break;

        case 2:
            console.log(" a opção selecionada foi: --edita--");
        break;

        case 3:
            console.log(" a opção selecionada foi: --deleta --");
        break;
        case 9:
            console.log(" a opção selecionada foi --sair--");
        break;



    default:
    console.log(" erro, insira um valor válido!!!!");
        break;
}
} while (op!=9);

