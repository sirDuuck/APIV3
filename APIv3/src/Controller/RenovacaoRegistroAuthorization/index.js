import LogRegister from "../../Lib/LogRegister/index.js";
import Process1 from "../../Lib/Process1/index.js";
import Save from "../../Lib/Save/index.js";

const RenovacaoRegistroAuthorization = async (req, res) => {
  try {
    const data = req.body;
    const token = req.params.authorization;
    const uni = await Process1.sendAutorization(token);
console.log(data)
console.log('uni', uni)
console.log(data.cpf)
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
    if (!uni) {
      const logData = {
        error: "ERP bloqueado",
      };
      const reg = await LogRegister(logData);
      console.log(reg);
      console.log("bloqueado");
      res.status(401).send("Unauthorized");
    } else if (data.cnpj === "") {
      const logData = {
        user: uni.fantasia,
        error: "falta CNPJ",
      };
      const reg = await LogRegister(logData);
      console.log(reg);
      console.log("documento vazio");
      res.status(500).send("missing documents");
    } else if (data.telefone === "" || data.telefone === null) {
      const logData = {
        user: uni.fantasia,
        error: "falta telefone",
      };
      const reg = await LogRegister(logData);
      console.log(reg);
      console.log("telefone vazio");
      res.status(500).send("the phone is missing");
    } else if (data.nome === "" || data.nome === null) {
      const logData = {
        user: uni.fantasia,
        error: "Cliente sem Nome",
      };
      const reg = await LogRegister(logData);
      console.log(reg);
      console.log("cpf e cnpj vazio");
      res.status(500).send("the name is missing");
    } else {
      console.log('data', data)
      const reg = await Save(data, token);
      console.log('registro', reg)
      res.status(201).json(reg);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export default RenovacaoRegistroAuthorization;
