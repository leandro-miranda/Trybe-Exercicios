import ICepAPI from './ICepAPI';


class CepService {
  private readonly cepApi: ICepAPI;

  constructor(cepApi: ICepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string) {
    return this.cepApi.getAddressByCEP(cep);
  }

}

export default CepService;