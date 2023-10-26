const WhatsAppImage = async (tel, msg) => {
    const url = `${process.env.ZAP_URL_API}/core/v2/api/chats/send-media`;
    try {
        const response = await axios.post(url, {
            number: "55" + tel,
            forceSend: true,
            verifyContact: true,
            linkUrl: "https://redebrasilrp.com.br/_assets/img/cnh_foto.jpeg",
            extension: ".jpg",
            base64: "",
            fileName: "cnh_foto",
            caption: msg
        }, {
            headers: {
                "access-token": process.env.ZAP_TOKEN,
                "Content-Type": 'application/json'
            }
        });
        console.log(JSON.stringify(response.data));
        return "Mensagem entregue";
    } catch (error) {
        console.log("error", error.response.data);
        return "não foi possível contactar o esse cliente, tente outra forma de contato";
    }
};
