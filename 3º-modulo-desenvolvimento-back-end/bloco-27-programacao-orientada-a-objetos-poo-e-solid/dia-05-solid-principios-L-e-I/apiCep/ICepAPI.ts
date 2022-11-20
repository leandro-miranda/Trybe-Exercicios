interface ICepAPI {
  getAddressByCEP(cep: string): Promise<void>;
}

export default ICepAPI;