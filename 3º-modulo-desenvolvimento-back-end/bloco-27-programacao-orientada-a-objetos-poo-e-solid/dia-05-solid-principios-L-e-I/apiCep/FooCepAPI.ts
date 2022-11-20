import ICepAPI from "./ICepAPI";
import axios from "axios";

class FooCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string): Promise<void> {
    try {
      const { status, data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(`Requisição feita com suceso. Status: ${status}\n`);
      console.log(data);
      
    } catch ({ response: { status } }) {
      if (status === 400) {
        console.log(`Cep inválido. Status: ${status}`);
        return;
      }
      console.log(`Erro ao fazer requisição. Status: ${status}`);
      return;
    }
  }
}

export default FooCepAPI;