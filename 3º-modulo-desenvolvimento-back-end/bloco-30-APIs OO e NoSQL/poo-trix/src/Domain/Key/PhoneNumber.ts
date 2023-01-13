import IKey from '../../Interfaces/IKey';
import IValid from '../../Interfaces/IValid';
import KeyTypes from '../KeyTypes';

class PhoneNumber implements IKey, IValid {
  readonly value: string;
  readonly owner: string;
  readonly type: string;

  constructor(value: string, owner: string) {
    if (!this.isValid(value)) throw new Error('Invalid Key');
    this.value = value;
    this.owner = owner;
    this.type = KeyTypes.PHONE_NUMBER;
  }

  isValid(value: string): boolean {
    const phoneNumberRegex = /^\+\d{2} \(\d{2}\) \d{5}-\d{4}$/;

    return phoneNumberRegex.test(value);
  }
}

export default PhoneNumber;