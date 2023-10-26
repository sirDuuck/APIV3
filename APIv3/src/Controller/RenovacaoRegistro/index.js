const RenovacaoRegistro = async (req, res) => {
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
  };

  export default RenovacaoRegistro