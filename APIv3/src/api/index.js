import whatsapp from './whatsapp/index.js';
import reqt from './reqt/index.js';
import consultar from './consultar/index.js';

const whatsappInstance = new whatsapp();
const reqtInstance = new reqt();
const consultarInstance = new consultar();

export default {
    whatsapp: whatsappInstance,
    consultar: consultarInstance,
    reqt: reqtInstance,
};