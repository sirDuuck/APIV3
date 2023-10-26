
    const RenovacaoURL = async (req, res) => {
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
            const token = req.params.authorization;
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
    };

export default RenovacaoURL
