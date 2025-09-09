import {Queue} from "./queue";
import leia = require("readline-sync");
import {Colors} from "./util/color";

const fila = new Queue<string>();
let continuar: boolean = true;
let opcao: number;

do {
console.log(Colors.YELLOW + "************************************");
console.log(Colors.YELLOW +"BANCO DO BRAZIL COM Z");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"1 - Criar Conta");
console.log(Colors.YELLOW +"2 - Listar todas as Contas");
console.log(Colors.YELLOW +"3 - Buscar Contas por Numero");
console.log(Colors.YELLOW +"4 - Atualizar Dados da Conta");
console.log(Colors.YELLOW +"5 - Apagar Conta");
console.log(Colors.YELLOW +"6 - Sacar");
console.log(Colors.YELLOW +"7 - Depositar");
console.log(Colors.YELLOW +"8 - Transferir valores entre Contas");
console.log(Colors.YELLOW +"9 - Sair");
console.log(Colors.YELLOW +"************************************");
console.log(Colors.YELLOW +"Entre com a opção desejada: ");

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

    case 9:
    console.log("Sair do programa");
    continuar = false;
    break;

    default:
    console.log("Opção inválida, retorne ao menu");

    
}
} while(continuar);