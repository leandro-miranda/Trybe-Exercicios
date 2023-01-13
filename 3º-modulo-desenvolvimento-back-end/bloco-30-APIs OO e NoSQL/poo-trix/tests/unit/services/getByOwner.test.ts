// import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import Key from '../../../src/Domain/Key/Key';
// import KeyService from '../../../src/Services/KeyService';

// describe('Deveria buscar chaves por pessoa proprietária', function () {
//   it('Deveria retornar a lista de chaves cadastradas', async function () {
//     const keyOutput: Key[] = new Key(
//       '+55 (18) 99765-1187',
//       'Jô Soares',
//       'phonenumber',
//       '633ec9fa3df977e30e993492',
//     );
//     sinon.stub(Model, 'find').resolves(keyOutput);

//     const service = new KeyService();
//     const result = await service.getByOwner('Jô Soares');

//     expect(result).to.be.deep.equal(keyOutput);

//     sinon.restore();
//   });
// });