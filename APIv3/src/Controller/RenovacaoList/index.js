renovacao.get("list/user/max/polo", async (req, res) => {
    await XPathExpression.findAll({
        attributes: ["id", "nome", "unidade"],
    });
    res.json(agendamento);
});

export default RenovacaoList