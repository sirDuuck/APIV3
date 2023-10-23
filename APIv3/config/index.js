import dateFormat from './whatsapp/index.js';
import envio from './reqt/index.js';
import hora from './consultar/index.js';
import lib from './consultar/index.js';
import log from './consultar/index.js';
import normalize from './consultar/index.js';
import process from './consultar/index.js';
import save from './consultar/index.js';

const dateFormatInstance = new dateFormat();
const envioInstance = new envio();
const horaInstance = new hora();
const libInstance = new lib();
const logInstance = new log();
const normalizeInstance = normalizenew ();
const processInstance = processnew ();
const saveInstance = new save();

export default {
    dateFormat: dateFormatInstance,
    envio: envioInstance,
    hora: horaInstance,
    lib:libInstance,
    log: logInstance,
    normalize: normalizeInstance, 
    process: processInstance,
    save: saveInstance,
};