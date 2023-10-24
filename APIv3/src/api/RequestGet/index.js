/* class reqt {
    constructor() {
    }
};

export default reqt; */

import axios from "axios";

const makeRequest = {
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

  RequestPost: async (url, data) => {
    try {
      const response = await axios({
        method: "Post",
        url: process.env.SERVE_CONSULT + url,
        data,
      });

      console.log({ status: 200, message: 'Requisição bem-sucedida' });
      return response.data;
    } catch (error) {
      console.error({ status: 400, message: 'A requisição falhou' });
      throw error; 
    }
  },

  RequestPost: async (url, data) => {
    return await makeRequest("post", url, data);
  },

  RequestPut: async (url, data) => {
    return await makeRequest("put", url, data);
  }

};