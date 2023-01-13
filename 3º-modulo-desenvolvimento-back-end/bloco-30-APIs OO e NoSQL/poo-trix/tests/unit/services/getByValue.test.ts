import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Key from '../../../src/Domain/Key/Key';
import KeyService from '../../../src/Services/KeyService';

describe('Deveria buscar um chave por valor', function () {
  it('deveria buscar uma chave por valor com SUCESSO', async function () {
    // Arrange
    const keyOutput: Key = new Key(
      '+55 (18) 99765-1187',
      'Jô Soares',
      'phonenumber',
      '633ec9fa3df977e30e993492',
    );
    Sinon.stub(Model, 'findOne').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.getByValue('+55 (18) 99765-1187');

    expect(result).to.be.deep.equal(keyOutput);

    Sinon.restore();
  });
});