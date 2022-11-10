interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger2: ' + param);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvado o valor ${key} na chave ${value}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave1', 'valor1');
database2.save('chave2', 'valor2');
database3.save('chave3', 'valor3');