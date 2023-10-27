import ConsultarCNPJ from "../../api/ConsultarCnpj/index.js";
import CriarAtendimento from "../CriarAtendimeto/index.js";
import RequestPost from "../../api/RequestPost/index.js";
import Whatsapp from "../../api/WhatsappSms/index.js";
import DataFormat from "../DateFormat/index.js";
import AgendaHora from "../AgendaHora/index.js";
import Process1 from "../Process1/index.js";
import EnvioImg from "../Envio/index.js";
import normalizeString from "../normalizeString/index.js"


const Config = async (data, erp) => {
  try {
    const [uni, tempo, empresa] = await Promise.all([
      Process1(erp),
      AgendaHora (),
      ConsultarCNPJ(data.cnpj)
    ]);
    
    const { unidade: polo, whatsapp: tel, fantasia: nome } = uni;

    const vence = !data.vencimento ? "esta proximo de vencer" : data.vencimento;

    const obs = `Venda efetuada automaticamente Por: ${nome} - Celular: ${tel} - Polo: ${polo} - ( ${tempo.dtatual} / ${tempo.htAtual} ) vencimento: ${vence} `;

    const tipocert = !data.cpf && data.cnpj ? "A1PJ" : data.cpf && data.cnpj ? "A1PJ" : data.cpf && !data.cnpj ? "A1PF" : "";
    const valor = tipocert === "A1PJ" ? uni.a1pj : uni.a1pf;
    const comicao = !uni.repasse ? "0,00" : `${uni.repasse},00`;

    const NomeClientFinal = normalizeString(data.nome);
    const EmpreRazFinal = normalizeString(empresa.razao);
    const EmpreEndFinal = normalizeString(empresa.end);
    const EmpreBairrFinal = normalizeString(empresa.bairro);
    const EmpreComplFinal = normalizeString(empresa.complemento);
    const EmpreCityFinal = normalizeString(pempresa.cidade);

    const currentDate = new Date();
    const formattedDate = DataFormat(currentDate);

    const dadosClientes = {
      s_alerta: "ATIVADO",
      estatos_pgto: "Falta pgto",
      unidade: polo,
      nome: NomeClientFinal,
      cpf: !data.cpf ? "" : data.cpf.length < 9 ? "" : data.cpf,
      razaosocial: EmpreRazFinal,
      cnpj: data.cnpj,
      contador: nome,
      referencia: formattedDate,
      obscont: obs,
      endereco: EmpreEndFinal,
      nrua: !empresa ? "" : empresa.numero,
      bairro: EmpreBairrFinal,
      complemento: EmpreComplFinal,
      cep: !empresa ? "" : empresa.cep,
      uf: !empresa ? "" : empresa.uf,
      cidade: EmpreCityFinal,
      tipocd: tipocert,
      email: data.email,
      telefone: data.telefone,
      telefone2: !data.telefone2 ? "" : data.telefone2,
      dt_agenda: tempo.dtagend,
      hr_agenda: tempo.htagenda,
      valorcd: valor,
      comissaoparceiro: comicao,
      andamento: "ERP",
      validacao: "ERP",
      scp: "A PAGAR",
    };

    async function sendSms(number, message) {
      await Promise.all([
        Whatsapp(number, message),
        EnvioImg(number),
        CriarAtendimento(number)
      ]);
    }

    if (data.telefone) {
      sendSms(data.telefone, `Olá! *${NomeClientFinal}*\nTudo bem?!\n\nSomos a *Rede Brasil RP*!\nParceiros da *${nome}*!\n\nEstamos lhe enviando essa mensagem para informar que já recebemos a sua solicitação!\nPedimos que aguarde,\naté às *${tempo.htagenda}* de *${tempo.agendVisual}*\nque entraremos em contato!\nSe preferir, retornar essa mensagem ou\nligar para *16 3325-4134*`);
    }
    if (data.telefone2) {
      sendSms(data.telefone2, `Olá! *${NomeClientFinal}*\nTudo bem?!\n\nSomos a Rede Brasil RP!\nParceiros da *${nome}*!\n\nEstamos lhe enviando essa mensagem para informar que já recebemos a sua solicitação!\nPedimos que aguarde,\naté às *${tempo.htagenda}* de *${tempo.agendVisual}*\nque entraremos em contato!\nSe preferir, retornar essa mensagem ou\nligar para *16 3325-4134*`);
    }

    const url = "/agenda";
    const resp = await RequestPost(url, dadosClientes);
    return resp;
  } catch (error) {
    console.log(error);
  }
}


export default Config