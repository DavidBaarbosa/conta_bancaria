export class Conta {
  numero: number;
  titular: string;
  saldo: number;

  constructor(numero: number, titular: string, saldo: number = 0) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente. Saldo atual: R$${this.saldo}`);
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
  }

  visualizar(): void {
    console.log(`Conta: ${this.numero} | Titular: ${this.titular} | Saldo: R$${this.saldo}`);
  }
}
