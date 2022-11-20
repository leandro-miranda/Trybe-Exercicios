import FooCepAPI from './FooCepAPI';
import CepService from './CepService';
import readline from 'readline-sync';

async function main() {
  const cepSvc = new CepService(new FooCepAPI());
 
    await cepSvc.addressByCep(`${readline.question('Digite o cep: ')}`);
}

main();