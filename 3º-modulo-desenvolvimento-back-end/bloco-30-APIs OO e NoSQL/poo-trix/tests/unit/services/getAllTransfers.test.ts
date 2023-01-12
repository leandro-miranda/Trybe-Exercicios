import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import PaymentStatus from '../../../src/Domain/PaymentStatus';
import TransferService from '../../../src/Services/TransferService';
import Payment from '../../../src/Domain/Payment';

const inputArray = [
  {
    payByPerson: 'José',
    payToPerson: 'Fernanda',
    amount: 500,
    key: '329.310.890-36',
    status: PaymentStatus.concluded,
    id: '63320b77aa12f0db4f210afe',
  },
  {
    payByPerson: 'Maria',
    payToPerson: 'Juan',
    amount: 500,
    key: '478.966.190-32',
    status: PaymentStatus.concluded,
    id: '63320b77aa12f0db4f210b00',
  },
];

describe('Deveria buscar todas as transferências', function () {
  it('Deveria buscar todas as transferências com SUCESSO', async function () {
    // Arrange
    const paymentOutput = inputArray.map((item) => new Payment(
      item.payByPerson,
      item.payToPerson,
      item.amount,
      item.key,
      item.id,
      item.status,
    ));
    
    sinon.stub(Model, 'find').resolves(paymentOutput);

    // Act
    const service = new TransferService();
    const result = await service.getAllTransfers();

    // Assert
    expect(result).to.be.deep.equal(paymentOutput);

    sinon.restore();
  });
});