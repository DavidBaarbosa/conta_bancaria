import { Conta } from "../model/conta";

export interface ContaRepository {
  criar(conta: Conta): void;
  listar(): Conta[];
  buscarPorNumero(numero: number): Conta | undefined;
  atualizar(conta: Conta): void;
  apagar(numero: number): void;
}
