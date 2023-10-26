import axios from "axios"

const Whatsapp = {
    sendTxt: async (tel, sms) => {
        try {
            const URL = `${process.env.ZAP_URL_API}/core/v2/api/chats/send-text`
            const Requeste = await axios({
                method: "POST",
                url: URL,
                heades: {
                    "access-token": process.env.ZAP_TOKEN,
                    "Content-Type": 'application/json'
                },
                data: {
                    number: "55" + tel,
                    message: sms,
                    forceSend: true,
                    verifyContact: false
                },
            });

            console.log(JSON.stringify(Requeste.data));
            return "mensagem entregue";
        } catch (error) {
            console.error(error)
            return `Mensagen não entrege: erro = ${JSON.stringify(error)}`
        }
    },
    sendIng: async () => {

    },
    AttCreate: async () => { }
}

export default Whatsapp