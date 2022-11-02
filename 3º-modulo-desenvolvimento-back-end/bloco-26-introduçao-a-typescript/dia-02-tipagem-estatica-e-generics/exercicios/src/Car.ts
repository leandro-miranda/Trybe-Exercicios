class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Beep beep!');
  }

  turnOn(): void {
    console.log('Carro ligado.');
  }

  turnOff(): void {
    console.log('Carro desligado.');
  }

  speedUp(): void {
    console.log('Acelerando o carro.');
  }

  speedDown(): void {
    console.log('Desacelerando o carro.');
  }

  stop(): void {
    console.log('Parando o carro.');
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}.`);
  }
}

export default Car;