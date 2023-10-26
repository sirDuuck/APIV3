const RenovacaoCheck = async (req, res) => {
    await ERP.findOne({
        where: {
            authorization: {
                [Op.like]: req.params.authorization,
            },
        },
    })
        .then(async (agendamento) => {
            res.status(200).json(agendamento);
        })
        .catch(async (err) => {
            const data = {
                error: "ERP bloqueado",
            };
            const reg = await LogRegister(data);
            console.log(reg);
            console.log(err);
            res.stats(400).json(err);
        });
};

renovacao.get("/check/valid:cnpj", async (req, res) => {
    await Fcweb.findOne({
        attributes: ["id", "nome", "razaosocial", "vctoCD", "cnpj"],
        where: {
            cnpj: {
                [Op.like]: req.params.cnpj,
            },
        },
    })
        .then((response) => {
            const data = {
                nome: response.nome,
                razao: response.razaosocial,
                cnpj: response.cnpj,
                vencimento: response.vctoCD,
            };
            res.status(200).json({
                mesage: "successfully",
                data: data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

export default RenovacaoCheck