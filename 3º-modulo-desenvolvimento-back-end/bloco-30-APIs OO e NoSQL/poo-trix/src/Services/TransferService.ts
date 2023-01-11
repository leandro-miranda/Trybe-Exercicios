import Payment from '../Domain/Payment';
import IPayment from '../Interfaces/IPayment';
import PaymentODM from '../Models/PaymentODM';

class TransferService {
  private isValidKey(key: string): boolean {
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

    return cpfRegex.test(key);
  }

  private createPaymentDomain(payment: IPayment | null): Payment | null {
    if (payment) {
      return new Payment(
        payment.payByPerson,
        payment.payToPerson,
        payment.amount,
        payment.key,
        payment.id,
      );
    }

    return null;
  }

  public async transfer(payment: IPayment) {
    if (!this.isValidKey(payment.key)) throw new Error('Invalid key');
    // Criar instância da Model de Payment usando Mongoose
    const paymentODM = new PaymentODM();
    // Inserir os dados no banco
    const newPayment = await paymentODM.create(payment);
    // Retornar os dados com o id
    return this.createPaymentDomain(newPayment);
  }

  public async getAllTransfers() {
    const paymentODM = new PaymentODM();
    const payments = await paymentODM.find();

    const paymentArry = payments
      .map((payment) => this.createPaymentDomain(payment));

    return paymentArry;
  }

  public async getByKey(key: string) {
    const paymentODM = new PaymentODM();
    const payments = await paymentODM.findByKey(key);

    const paymentArry = payments
      .map((payment) => this.createPaymentDomain(payment));

    return paymentArry;
  }

  public async undoTransfer(id: string, payment: IPayment) {
    if (!this.isValidKey(payment.key)) throw new Error('Invalid key');
    const paymentODM = new PaymentODM();
    
    return paymentODM.update(id, payment);
  }
}

export default TransferService;