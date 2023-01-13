import IKey from '../../Interfaces/IKey';
import IValid from '../../Interfaces/IValid';
import KeyTypes from '../KeyTypes';

class Mail implements IKey, IValid {
  readonly id?: string;
  readonly value: string;
  readonly owner: string;
  readonly type: string;

  constructor(value: string, keyOwner: string) {
    if (!this.isValid(value)) throw new Error('Invalid Key');
    this.value = value;
    this.owner = keyOwner;
    this.type = KeyTypes.MAIL;
  }

  isValid(value: string): boolean {
    const mailRegex = /\S+@\S+\.\S+/;

    return mailRegex.test(value);
  }
}

export default Mail;
