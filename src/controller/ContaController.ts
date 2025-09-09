import { Conta } from "../model/conta";

export class ContaController {
    private contas: Conta[] = [];  // armazena as contas

    constructor() {
        // nada para passar
    }

    // CRUD básico
    cadastrar(conta: Conta) { this.contas.push(conta); }

    listarTodas(): Conta[] { return this.contas; }

    procurarPorNumero(numero: number): Conta | undefined {
        return this.contas.find(c => c.numero === numero);
    }

    atualizar(conta: Conta) {
        const index = this.contas.findIndex(c => c.numero === conta.numero);
        if (index !== -1) this.contas[index] = conta;
    }

    deletar(numero: number) {
        this.contas = this.contas.filter(c => c.numero !== numero);
    }

    // Métodos auxiliares
    sacar(numero: number, valor: number) {
        const conta = this.procurarPorNumero(numero);
        if (conta) conta.sacar(valor);
    }

    depositar(numero: number, valor: number) {
        const conta = this.procurarPorNumero(numero);
        if (conta) conta.depositar(valor);
    }

    transferir(origem: number, destino: number, valor: number) {
        const contaOrigem = this.procurarPorNumero(origem);
        const contaDestino = this.procurarPorNumero(destino);
        if (contaOrigem && contaDestino) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
}
