class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    // verifica se a data é válida
    // const dataStr = `${ano}-${mes}-${dia}`;
    // if (new Date(dataStr).getDate() !== dia) {
    //   this._dia = 1;
    //   this._mes = 1;
    //   this._ano = 1900;
    // } else {
    //   this._dia = dia;
    //   this._mes = mes;
    //   this._ano = ano;
    // }
    // note que esse método não é chamado a partir do this, e sim a partir do Data
    // isso acontece pois ele é estático, ou seja, não está vinculado a nenhuma instância
    if (!Data.validateData(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
      }
  }

  get dia(): number {
    return this._dia;
  }

  set dia(value: number) {
    this._dia = value;
  }

  get mes(): number {
    return this._mes;
  }

  set mes(value: number) {
    this._mes = value;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(value: number) {
    this._ano = value;
  }

  obterNomeDoMes(): string {
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return meses[this._mes - 1];
  }

  anoBissexto(): boolean {
    return this._ano % 4 === 0;
  }

  compare(data: Data): number {
    const dataAtualStr = `${this._ano}-${this._mes}-${this._dia}`;

    const dataStr = `${data.ano}-${data.mes}-${data.dia}`;

    if (new Date(dataAtualStr).getTime() > new Date(dataStr).getTime()) return 1;
    if (new Date(dataAtualStr).getTime() < new Date(dataStr).getTime()) return -1;
    
    return 0;
  }

  formato(formatacao: string): string {
    const condicoes: boolean[] = [
      (!formatacao.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatacao.match(/m{2,4}/g) && !formatacao.match(/M{1}/g)), // verifica se possui o mês na formatação
      (!formatacao.match(/d{2}/g)), // verifica se possui o dia na formatação
    ];

    if (condicoes.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatacao}`);
    }

    const dia = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`;

    const mes = this.mes > 9 ? this.mes.toString() : `0${this.mes.toString()}`;

    const ano = this.ano.toString();

    const dataformatada = formatacao
      .replace('dd', dia).replace('mm', mes)
      .replace('M', this.obterNomeDoMes()).replace('aaaa', ano)
      .replace('aa', ano.substr(-2));

    return dataformatada;
  }

  // esse método é estático pois ele não precisa acessar o `this` em momento algum
  // logo, não precisa estar vinculado a nenhuma instância
  private static validateData(dia: number, mes: number, ano: number)
    : boolean {
    const dataStr = `${ano}-${mes}-${dia}`;

    if (new Date(dataStr).getDate() !== dia) return false;

    return true;
  }
}

// Para testar!

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.dia);
console.log('Mês: ', testDate.mes);
console.log('Mês por extenso: ', testDate.obterNomeDoMes());
console.log('Ano: ', testDate.ano);
console.log('É ano bissexto: ', testDate.anoBissexto() ? 'Sim' : 'Não');
console.log(testDate.formato('dd/mm/aaaa'));
console.log(testDate.formato('dd-mm-aaaa'));
console.log(testDate.formato('aaaa/mm/dd'));
console.log(testDate.formato('aaaa-mm-dd'));
console.log(testDate.formato('dd de M de aa'));
console.log(testDate.formato('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// formato inválido
console.log(invalidDate.formato('a m d'));