const RenovacaoAgenda = async (req, res) => {
    try {
        const dados = req.body;

        if (!dados) {
            return res.status(400).json({ error: 'Dados de entrada ausentes' });
        }

        const idioma = 'pt';
        const mensagens = {
            'pt': 'Cliente registrado com sucesso, dentro de 1 hora entraremos em contato com você.',
            'en': 'Successfully registered customer, we will contact you within 1 hour.'
        };

        if (!mensagens[idioma]) {
            return res.status(400).json({ error: 'Idioma não suportado' });
        }

        const agendamento = await Fcweb.create(dados);
        res.status(200).json({
            message: mensagens[idioma],
            data: agendamento,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ocorreu um erro interno no servidor' });
    }
};

export default RenovacaoAgenda;
