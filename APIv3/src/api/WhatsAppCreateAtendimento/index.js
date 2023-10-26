const WhatsAppCreateAtendimento = async (tel) => {
    const url = `${process.env.ZAP_URL_API}/core/v2/api/chats/create-new`;

    try {
        const response = await axios.post(url, {
            "number": `55${tel}`,
            "message": "Obrigado por esperar! Vamos resolver isso juntos em breve. 😄",
            "sectorId": "60de0c8bb0012f1e6ac55473"
        }, {
            headers: {
                "access-token": process.env.ZAP_TOKEN,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        });

        console.log(JSON.stringify(response.data));
        return "Atendimento criado com sucesso";
    } catch (error) {
        console.log("error", error.response.data);
        return "não foi possível criar atendimento para ese cliente";
    }
};

export default WhatsAppCreateAtendimento