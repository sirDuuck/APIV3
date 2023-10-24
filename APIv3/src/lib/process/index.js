import { RequestGet } from ".APIv3/src/api/RequestGet/index.js";
import { LogRegister } from ".APIv3/src/lib/log/index.js";

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