import Client from "./Client";
import ItemDoPedido from "./ItemDoPedido";

export default class Pedido {
  private _cliente: Client;
  private _itens: ItemDoPedido[] = [];
  private _metodoPagamento: string;
  private _desconto: number

  constructor(
    cliente: Client,
    itens: ItemDoPedido[],
    metodoPagamento: string,
    desconto: number,
  ) {
    this._cliente = cliente;
    this._itens = itens;
    this._metodoPagamento = metodoPagamento;
    this._desconto = desconto;
  }

  get cliente(): Client {
    return this._cliente;
  }

  set cliente(value: Client) {
    this._cliente = value;
  }

  get itens(): ItemDoPedido[] {
    return this._itens;
  }

  set itens(value: ItemDoPedido[]) {
    if (value.length === 0) {
      throw new Error("O pedido deve ter pelo menos um item");
    }

    this._itens = value;
  }

  get metodoPagamento(): string {
    return this._metodoPagamento;
  }

  set metodoPagamento(value: string) {
    this._metodoPagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error("O desconto não pode ser um valor negativo");
    }

    this._desconto = value;
  }

  calculaTotal(): number {
    return this._itens
      .reduce((valorAnterior, item) =>  {
        const total = valorAnterior + item.preco;

        return total; 
      }, 0);
  }

  calculaTotalComDesconto(): number {
    return this.calculaTotal() * (1 - this._desconto);
  }
}
