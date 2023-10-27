import Fcweb from "../../DB/Table/Fcweb/index.js";
import { Op } from "sequelize";


const RenovacaoCheckCnpj = async (req, res) => {
    await Fcweb.findOne({
        attributes: ["id", "nome", "razaosocial", "vctoCD", "cnpj"],
        where: {
            cnpj: {
                [Op.like]: req.params.cnpj,
            },
        },
    })
        .then((response) => {
            console.log(response)
            if (!response) {
                res.status(200).send('Não pertence ao banco de dados')
            }
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
};

export default RenovacaoCheckCnpj
