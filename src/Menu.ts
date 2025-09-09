import {Queue} from "./queue";
import leia = require("readline-sync");
import {Colors} from "./util/color";
import { Conta } from "./model/conta";
import { ContaController } from "./controller/ContaController";

const controller = new ContaController();

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

switch (opcao) {
        case 1: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            const titular = leia.question("Digite o nome do titular: ");
            const saldoInicial = leia.questionFloat("Digite o saldo inicial: ");
            const novaConta = new class extends Conta {}(numero, titular, saldoInicial); // Instancia de Conta abstrata
            controller.cadastrar(novaConta);
            console.log(Colors.GREEN + "Conta criada com sucesso!" + Colors.RESET);
            break;
        }

        case 2:
            controller.listarTodas().forEach(c => c.visualizar());
            break;

        case 3: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            const conta = controller.procurarPorNumero(numero);
            if (conta) conta.visualizar();
            else console.log(Colors.RED + "Conta não encontrada" + Colors.RESET);
            break;
        }

        case 4: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            const conta = controller.procurarPorNumero(numero);
            if (conta) {
                const novoTitular = leia.question("Digite o novo nome do titular: ");
                conta.titular = novoTitular;
                controller.atualizar(conta);
                console.log(Colors.GREEN + "Conta atualizada com sucesso!" + Colors.RESET);
            } else console.log(Colors.RED + "Conta não encontrada" + Colors.RESET);
            break;
        }

        case 5: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            controller.deletar(numero);
            console.log(Colors.GREEN + "Conta apagada com sucesso!" + Colors.RESET);
            break;
        }

        case 6: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            const valor = leia.questionFloat("Digite o valor para saque: ");
            controller.sacar(numero, valor);
            break;
        }

        case 7: {
            const numero = leia.questionInt("Digite o numero da conta: ");
            const valor = leia.questionFloat("Digite o valor para deposito: ");
            controller.depositar(numero, valor);
            break;
        }

        case 8: {
            const origem = leia.questionInt("Digite o numero da conta de origem: ");
            const destino = leia.questionInt("Digite o numero da conta de destino: ");
            const valor = leia.questionFloat("Digite o valor a transferir: ");
            controller.transferir(origem, destino, valor);
            break;
        }

    case 9:
      console.log(Colors.YELLOW + "Ate a proxima");
      continuar = false;
      break;

    default:
      console.log(Colors.RED + "Opção invalida, retorne ao menu");
  }
} while (continuar);