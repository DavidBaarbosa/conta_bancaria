import {Queue} from "./queue";
import leia = require("readline-sync");
import {Colors} from "./util/color";
import { Conta } from "./model/conta";

// Lista de contas para teste
const contas: Conta[] = [
  new Conta(1, "David", 900),
  new Conta(2, "Carlos", 3000)
];

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
      case 1: {
      const numero = leia.questionInt("Digite o número da conta: ");
      const titular = leia.question("Digite o nome do titular: ");
      const saldoInicial = leia.questionFloat("Digite o saldo inicial: ");
      contas.push(new Conta(numero, titular, saldoInicial));
      console.log(Colors.GREEN + "Conta criada com sucesso!" + Colors.RESET);
      break;
    }

    case 2:
      contas.forEach(c => c.visualizar());
      break;

    case 3: {
      const numBusca = leia.questionInt("Digite o número da conta: ");
      const contaEncontrada = contas.find(c => c.numero === numBusca);
      if (contaEncontrada) {
        contaEncontrada.visualizar();
      } else {
        console.log(Colors.RED + "Conta não encontrada." + Colors.RESET);
      }
      break;
    }

    case 4: {
      const numAtualizar = leia.questionInt("Digite o número da conta: ");
      const contaAtualizar = contas.find(c => c.numero === numAtualizar);
      if (contaAtualizar) {
        const novoTitular = leia.question("Digite o novo nome do titular: ");
        contaAtualizar.titular = novoTitular;
        console.log(Colors.GREEN + "Dados atualizados com sucesso!" + Colors.RESET);
      } else {
        console.log(Colors.RED + "Conta não encontrada." + Colors.RESET);
      }
      break;
    }

    case 5: {
      const numApagar = leia.questionInt("Digite o número da conta: ");
      const index = contas.findIndex(c => c.numero === numApagar);
      if (index !== -1) {
        contas.splice(index, 1);
        console.log(Colors.GREEN + "Conta apagada com sucesso!" + Colors.RESET);
      } else {
        console.log(Colors.RED + "Conta não encontrada." + Colors.RESET);
      }
      break;
    }

    case 6: {
      const numSaque = leia.questionInt("Digite o número da conta: ");
      const contaSaque = contas.find(c => c.numero === numSaque);
      if (contaSaque) {
        const valor = leia.questionFloat("Digite o valor para saque: ");
        contaSaque.sacar(valor);
      } else {
        console.log(Colors.RED + "Conta não encontrada." + Colors.RESET);
      }
      break;
    }

    case 7: {
      const numDeposito = leia.questionInt("Digite o número da conta: ");
      const contaDeposito = contas.find(c => c.numero === numDeposito);
      if (contaDeposito) {
        const valor = leia.questionFloat("Digite o valor para depósito: ");
        contaDeposito.depositar(valor);
      } else {
        console.log(Colors.RED + "Conta não encontrada." + Colors.RESET);
      }
      break;
    }

    case 8: {
      const numOrigem = leia.questionInt("Digite o número da conta de origem: ");
      const numDestino = leia.questionInt("Digite o número da conta de destino: ");
      const valor = leia.questionFloat("Digite o valor a transferir: ");

      const contaOrigem = contas.find(c => c.numero === numOrigem);
      const contaDestino = contas.find(c => c.numero === numDestino);

      if (!contaOrigem || !contaDestino) {
        console.log(Colors.RED + "Conta(s) não encontrada(s)." + Colors.RESET);
      } else if (contaOrigem.saldo < valor) {
        console.log(Colors.RED + "Saldo insuficiente para transferência." + Colors.RESET);
      } else {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        console.log(Colors.GREEN + "Transferência realizada com sucesso!" + Colors.RESET);
      }
      break;
    }

    case 9:
    console.log(Colors.YELLOW + "Até a próxima");
    continuar = false;
    break;

    default:
    console.log(Colors.RED +"Opção inválida, retorne ao menu");

    }
} while(continuar);