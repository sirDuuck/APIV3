/* class reqt {
    constructor() {
    }
};

export default reqt; */

import axios from "axios";

const makeRequest = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url: process.env.SERVE_CONSULT + url,
      data,
    });

    console.log({ status: 200, message: 'Requisição bem-sucedida' });
    return response.data;
  } catch (error) {
    console.error({ status: 400, message: 'A requisição falhou' });
    throw error; // relança o erro para que o código chamador possa tratá-lo, se necessário
  }
};

export const RequestGet = async (url) => {
  return await makeRequest("get", url, null);
};

export const RequestPost = async (url, data) => {
  return await makeRequest("post", url, data);
};

export const RequestPut = async (url, data) => {
  return await makeRequest("put", url, data);
};
