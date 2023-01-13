import { Schema } from 'mongoose';
import IKey from '../Interfaces/IKey';
import AbstractODM from './AbstractODM';

class KeyODM extends AbstractODM<IKey> {
  constructor() {
    const schema = new Schema({
      value: { type: String, required: true },
      owner: { type: String, required: true },
      type: { type: String, required: true },
    });

    super(schema, 'Key');
  }

  public async findByValue(value: string): Promise<IKey | null> {
    return this.model.findOne({ value });
  }

  public async findByOwer(owner: string): Promise<IKey[]> {
    return this.model.find({ owner });
  }
}

export default KeyODM;