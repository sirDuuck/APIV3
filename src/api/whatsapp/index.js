import "dotenv/config";
import axios from "axios";

export const WhatsAppSms = async (tel, msg) => {
    const url = '${process.env.ZAP_URL_API}/core/v2/api/chats/send-text';

    const resposta = await axios({
        method: "POST",
        url: url,
        heades: {
            "access-token": process.env.ZAP_TOKEN,
            "Content-Type": 'application/json'
        },
        data: {
            number: "55" + tel,
            message: msg,
            forceSend: true,
            verifyContact: false
        },
        redirect: "follow"
    })
    .then((response) => {
        console.log(JSON.stringify(response.data));
        return "mensagem entregue";
    })

    .catch((error) => {
        console.log("error", error.response.data);
        return "não foi possível contactar esse cliente, tente outra forma de contato";
    });
  return resposta;
};

