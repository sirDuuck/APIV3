import Config from "../Config/index.js";
import LogRegister from "../LogRegister/index.js";

const Save = async (data, v3) => {
  const confg = await Config(data, v3);
  const dados = {
    user: confg.data.contador,
    clienteId: confg.data.id,
    clienteTel: confg.data.telefone,
    clienteName: confg.data.nome,
    clienteValor: confg.data.nome,
    error: "success",
  };
  const reg = await LogRegister(dados);
  console.log(reg);
  return confg;
};
export default Save