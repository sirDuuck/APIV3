import ERP from "../../DB/Table/ERP/index.js";


const RenovacaoList = async (req, res) => {
  const agendamento =  await ERP.findAll({
        attributes: ["id", "nome", "unidade"],
    });
    res.json(agendamento);
};

export default RenovacaoList