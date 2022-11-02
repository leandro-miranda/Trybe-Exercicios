"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Beep beep!');
    }
    turnOn() {
        console.log('Carro ligado.');
    }
    turnOff() {
        console.log('Carro desligado.');
    }
    speedUp() {
        console.log('Acelerando o carro.');
    }
    speedDown() {
        console.log('Desacelerando o carro.');
    }
    stop() {
        console.log('Parando o carro.');
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
}
exports.default = Car;
