import "dotenv/config";
import axios from "axios";

const RequestGet = {
  RequestGet: async (url) => {
    try {
      const response = await axios({
        method: "Get",
        url: process.env.SERVE_CONSULT + url,
      });

      console.log({ status: 200, message: 'Requisição bem-sucedida' });
      return response.data;
    } catch (error) {
      console.error({ status: 400, message: 'A requisição falhou' });
      throw error; // relança o erro para que o código chamador possa tratá-lo, se necessário
    }
  },
};

export default RequestGet