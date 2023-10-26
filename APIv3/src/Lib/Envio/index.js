const EnvioImg = async (tel) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await WhatsAppImage(tel, "Para agilizar o seu atendimento, por gentileza! Nos envie uma foto da sua CNH.\nCaso tenha dúvida, siga o exemplo acima!");
}

export default EnvioImg