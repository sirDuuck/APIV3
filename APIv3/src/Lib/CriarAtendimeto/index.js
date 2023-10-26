const CriarAtendimento = async function CriarAtendimento(tel) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    await WhatsAppCreateAtendimento(tel);
  }

  export default CriarAtendimento