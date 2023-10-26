import RequestGet from "../../api/RequestGet/index.js";
import LogRegister from "../LogRegister/index.js";



const Process1 = {
 sendAutorization: async (authorization) => {
  try {
    const urlCheck = "/check/erp/" + authorization;
    const check = await RequestGet(urlCheck);

    if (!check) {
      throw new Error("ERP bloqueado");
    }

    return check;
  } catch (error) {
    const data = {
      error: error.message,
    }
  };
  if (authorization === "") {
    data.error = "authorization em branco";
  }

  const reg = await LogRegister(data);
  console.log(reg);
  console.error(error);
}
};

export default Process1