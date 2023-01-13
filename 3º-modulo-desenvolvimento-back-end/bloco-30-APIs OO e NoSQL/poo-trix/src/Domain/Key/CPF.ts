import IKey from '../../Interfaces/IKey';
import IValid from '../../Interfaces/IValid';
import KeyTypes from '../KeyTypes';

class CPF implements IKey, IValid {
  readonly value: string;
  readonly owner: string;
  readonly type: string;

  constructor(value: string, owner: string) {
    if (!this.isValid(value)) throw new Error('Invalid Key');
    this.value = value;
    this.owner = owner;
    this.type = KeyTypes.CPF;
  }

  isValid(value: string): boolean {
    const cpfRegex = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

    return cpfRegex.test(value);
  }
}

export default CPF;