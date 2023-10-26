const RenovacaoRegistroAuthorization = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const token = req.params.authorization;
    const uni = await Process1(token);

    if (!uni) {
      const data = {
        rerrpr: " ERP bloqueado",
      };
      const reg = await LogRegister(data);
      console.log(reg);
      console.log("bloqueado");
      res.status(401).send("Unauthorized");
    } else if (data.cnpj === "") {
      const data = {
        user: uni.fantasia,
        error: "falta CNPJ",
      };
      const reg = await LogRegister(data);
      console.log(reg);
      console.log("documento vazio");
      res.status(500).send("missing documents");
    } else if (data.telefone === "" || data.telefone === null) {
      const data = {
        user: uni.fantasia,
        error: "falta telefone",
      };
      const reg = await LogRegister(data);
      console.log(reg);
      console.log("telefone vazio");
      res.status(500).send("the phone is missing");
    } else if (data.nome === "" || data.nome === null) {
      const data = {
        user: uni.fantasia,
        error: "Cliente sem Nome",
      };
      const reg = await LogRegister(data);
      console.log(reg);
      console.log("cpf e cnpj vazio");
      res.status(500).send("the name is missing");
    } else {
      const reg = await Save(data, token)
      res.status(201).joson(reg);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export default RenovacaoRegistroAuthorization