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

export default RenovacaoCheck