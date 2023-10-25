renovacao.post("/register/:authorization", async (req, res) => {
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
});

renovacao.post(
  "/register/v3/:authorization/nome/cnpj/:email/:telefone",
  async (req, res) => {
    try {
      const empresa = await getCNPJ(req.params.cnpj);
      console.log(empresa);

      const data1 = {
        nome: req.params.nome,
        cnpj: req.params.cnpj,
        email: req.params.email,
        telefone: req.params.telefone,
        endereco: empresa === undefined ? "" : empresa.end,
        nrua: empresa === undefined ? "" : empresa.numero,
        bairro: empresa === undefined ? "" : empresa.complemento,
        cep: empresa === undefined ? "" : empresa.cep,
        uf: empresa === undefined ? "" : empresa.uf,
        cidade: empresa === undefined ? "" : empresa.cidade,
      };
      const data = data1;
      console.log(data);
      const token = req.params. authorization;
      const uni = await Process1(token);

      if (!uni) {
        const data = {
          error: "ERP bloqueado",
        };
        const reg = await LogRegister(data);
        console.log(reg);
        console.log("bloqueado");
        res.status(401).send("Unauthorized");
      } else if (data.cnpj === "") {
        const data = {
          user: uni.fantasia,
          error: "falta cnpj",
        };
        const reg = await LogRegister(data);
        console.log(reg);
        console.log("documento vazio");
        res.status(500).send("missing documents");
      } else if (data.telefone ==="" || data.telefone === null) {
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
          error: "Cliente sem nome",
        };
        const reg = await LogRegister(data);
        console.log(reg);
        console.log("nome vazio");
        res.status(500).send("the name is missing");
      } else {
        const reg = await Save(data, token)
        res.status(201).json(reg);
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

renovacao.post("/registro", async (req, res) => {
  const dados = req.body;
  await ERP_LOG.create(dados)
    .then((response) => {
      consolo.log(response);
      res.status(200).json({
        mesage: "successfully",
        data: response,
      });
    })
    .catch((err) => {
      console.log(err);
      req.status(400).json(err);
    });
});

export default renovacaoRegistro