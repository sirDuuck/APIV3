import ERP_LOG from "../../DB/Table/ERP_Log/index.js";


const RenovacaoRegistro = async (req, res) => {
    const dados = req.body;
    await ERP_LOG.create(dados)
      .then((response) => {
        console.log(response);
        res.status(200).json({
          mesage: "successfully",
          data: response,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  };

  export default RenovacaoRegistro