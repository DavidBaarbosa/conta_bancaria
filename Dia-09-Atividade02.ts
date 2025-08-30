import {Queue} from "./queue";
import leia = require("readline-sync");

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;

do {
console.log("************************************");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("************************************");
console.log("Entre com a opção desejada: ");

opcao = leia.questionInt();

console.log(opcao);

switch(opcao){
    case 1:
        let nome: string = leia.question("Digite o nome da pessoa: ");
        fila.enqueue(nome);
        console.log("************************************");
        console.log("Pessoas atualmente na fila:");
        fila.printQueue();
        break;

    case 2:
        let lista: string;
        console.log("************************************");
        console.log("Lista de Clientes na Fila:");
        fila.printQueue();
        break;

    case 3:
        let prox: string | undefined = fila.dequeue();
        if (prox !== undefined) {
        console.log("************************************");
        console.log("Próximo da fila:", prox);
    } 
        break;

    case 0:
    console.log("Sair do programa");
    continuar = false;
    break;

    default:
    console.log("Opção inválida, retorne ao menu");

    
}
} while(continuar);