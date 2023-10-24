import { RequestGet } from ".APIv3/src/api/RequestGet/index.js";
import { LogRegister } from ".APIv3/src/lib/log/index.js";

export const Process1 = async (authorization) => {
  try {
    const urlCheck = "/check/erp/" + authorization;
    const check = await RequestGet(urlCheck);
    const uni = check;

    if (!uni) {
      const data = {
        error: "ERP bloqueado",
      };
      const reg = await LogRegister(data);
      console.log(reg);
    }
    return uni;
  } catch (error) {
    if (authorization === "") {
      const data = {
        error: "authorization em branco",
      };
      const reg = await LogRegister(data);
      console.log(reg);
      console.error(error);
    }
  }
};