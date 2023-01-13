import Key from '../Domain/Key/Key';
import KeyFactory from '../Domain/Key/KeyFactory';
import IKey from '../Interfaces/IKey';
import KeyODM from '../Models/KeyODM';

class KeyService {
  private createKeyDomain(key: IKey | null): Key | null {
    if (key) {
      return new Key(
        key.value,
        key.owner,
        key.type,
        key.id,
      );
    }

    return null;
  }

  public async register(key: IKey) {
    const typeKey = KeyFactory.create(key);
    const keyODM = new KeyODM();
    const newKey: IKey = await keyODM.create(typeKey);

    return this.createKeyDomain(newKey);
  }

  public async getByOwner(owner: string) {
    const keyODM = new KeyODM();
    const keys = await keyODM.findByOwer(owner);
    const keySet = keys.map((key) => this.createKeyDomain(key));

    return keySet;
  }

  public async getByValue(value: string) {
    const keyODM = new KeyODM();
    const newKey = await keyODM.findByValue(value);

    return this.createKeyDomain(newKey);
  }
}

export default KeyService;