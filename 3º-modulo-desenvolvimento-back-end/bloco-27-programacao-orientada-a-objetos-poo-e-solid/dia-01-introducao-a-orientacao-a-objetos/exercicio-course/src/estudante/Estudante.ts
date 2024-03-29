class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasDeProvas: number[] = Array();
  private _notasDeTrabalhos: number[] = Array();

  constructor(matricula: string, nome: string, notasDeProvas: number[], notasDeTrabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this.notasDeProvas = notasDeProvas;
    this.notasDeTrabalhos = notasDeTrabalhos;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
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

  get notasDeProvas(): number[] {
    return this._notasDeProvas;
  }

  set notasDeProvas(value: number[]) {
    if (value.length !== 4) {
      throw new Error('O estudante não pode ter mais que 4 notas de provas');
    }
    this._notasDeProvas = value;
  }

  get notasDeTrabalhos(): number[] {
    return this._notasDeTrabalhos;
  }

  set notasDeTrabalhos(value: number[]) {
    if (value.length !== 2) {
      throw new Error('O estudante não pode ter mais que 2 notas de trabalhos');
    }
    this._notasDeTrabalhos = value;
  }

    somaDeNotas(): number {
      return [...this.notasDeProvas, ...this.notasDeTrabalhos]
        .reduce((acc, cur) => {
          const proximaNota = acc + cur;
          
          return proximaNota;
         }, 0);
    }

    somaNotaMedia(): number {
      const somaDeNotas = this.somaDeNotas();
      const dividir = this.notasDeProvas.length + this.notasDeTrabalhos.length;

      return Math.round(somaDeNotas / dividir);
    }

}


// Para testar!
const estudante = new Estudante('202001011', 'João', [25, 20, 23, 23], [45, 45]);

estudante.notasDeProvas = [25, 20, 23, 23];
estudante.notasDeTrabalhos = [45, 45];

console.log(estudante);
console.log('Soma de todas as notas: ', estudante.somaDeNotas());
console.log('Média de todas as notas: ', estudante.somaNotaMedia());

const estudante2 = new Estudante('202001012', 'Jo', [30, 21, 23, 19],  [35, 50]);
console.log(estudante2);
console.log('Soma de todas as notas: ', estudante2.somaDeNotas());
console.log('Média de todas as notas: ', estudante2.somaNotaMedia());
