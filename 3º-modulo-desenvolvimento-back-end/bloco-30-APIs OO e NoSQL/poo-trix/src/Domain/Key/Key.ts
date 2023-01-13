class Key {
  private value: string;
  private owner: string;
  private type: string;
  private id?: string;

  constructor(
    value: string,
    owner: string,
    type: string,
    id?: string,
  ) {
    this.value = value;
    this.owner = owner;
    this.type = type;
    this.id = id;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }

  public getOwner() {
    return this.owner;
  }

  public setOwner(owner: string) {
    this.owner = owner;
  }

  public getType() {
    return this.type;
  }

  public setType(type: string) {
    this.type = type;
  }
}

export default Key;