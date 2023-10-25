renovacao.post("/agenda", async (req, res) => {
    const dados = req.body;
    console.log(dados);

    const idioma = 'pt';
    const mensagens = {
        'pt': 'Cliente registrado com sucesso, dentro de 1 hora entraremos em contato com você.',
        'en': 'Successfully registered customer, we will contact you within 1 hour.'
    };
    if (mensagens[idioma]) {
        try {
            const agendamento = await Fcweb.create(dados);
            res.status(200).json({
                message: mensagens[idioma],
                data: agendamento,
            });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
});

export default renovacaoAgenda
