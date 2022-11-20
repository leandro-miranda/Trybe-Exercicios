// import { readline } from 'readline-sync';
import FooCepAPI from './FooCepAPI';
import CepService from './CepService';

const readline = require('readline-sync');

async function main() {
  const cepSvc = new CepService(new FooCepAPI());
 
    await cepSvc.addressByCep(`${readline.question('Digite o cep: ')}`);
}

main();