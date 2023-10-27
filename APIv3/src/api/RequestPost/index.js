import axios from "axios";
import "dotenv/config";

const RequestPost = async (url, data) => {
  try {
    const response = await axios({
      method: "Post",
      url: process.env.SERVE_CONSULT + url,
      data,
    });
    if (response.data && response.data.id) {
      console.log({ status: 200, message: 'Requisição bem-sucedida' });
      return response.data.id;
    } else {
      throw new Error('ID not found in the response');
    }
  } catch (error) {
    console.error({ status: 400, message: 'A requisição falhou' });
    throw error;
  }
};

export default RequestPost