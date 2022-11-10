export default class Client {
  private _nome = String();

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter pelo menos 3 caracteres');
    }

    this._nome = value;
  }
}