// 🚀 Exercício 1: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, 
// conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é 
// apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. 
// Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, 
// somente das classes que herdam dela.

export default abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos

    return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
   if (value.length < 3) {
     throw new Error("Nome deve ter pelo menos 3 caracteres");
   }
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('Data de nascimento não pode ser maior que a data atual');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
}