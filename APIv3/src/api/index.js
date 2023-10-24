import whatsapp from './whatsapp/index.js';
import RequestGet from './RequestGet/index.js';
import consultar from './consultar/index.js';

const whatsappInstance = new whatsapp();
const RequestGetInstance = new RequestGet();
const consultarInstance = new consultar();

export default {
    whatsapp: whatsappInstance,
    consultar: consultarInstance,
    RequestGet: RequestGetInstance,
};