// import { expect } from 'chai';
// import Payment from '../../../src/Domain/Payment';
// import PaymentStatus from '../../../src/Domain/PaymentStatus';

// describe('Payment', function () {
//   it('deve criar um pagamento', function () {
//     const payment = new Payment({ 
//       amount: 10, key: '9230123123', payByPerson: 'Isaac', payToPerson: 'Daniel'});

//     expect(payment).to.be.instanceOf(Payment);
//   });
//   it('deve conseguir cancelar o pagamento', function () {
//     const payment = new Payment({
//       amount: 10,
//       key: '9230123123',
//       payByPerson: 'Isaac',
//       payToPerson: 'Daniel',
//       id: 'any-id',
//       date: new Date('2023-01-01'),
//     });

//     payment.undo(new Date('2023-01-02'));

//     expect(payment.getStatus()).to.be.equal(PaymentStatus.reversed);
//   });

//   it(
//     'não deve cancelar o pagamento caso tenha sido realizado a mais de 1 mês',
//     function () {
//       const payment = new Payment({
//         amount: 10,
//         key: '9230123123',
//         payByPerson: 'Isaac',
//         payToPerson: 'Daniel',
//         id: 'any-id',
//         // date: new Date('2022-10-10'),
//       });

//       expect(() => {
//         payment.undo(new Date('2022-12-12'));
//       }).to.throw('Invalid undo operation');
//     },
//   );
// });