import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import Connection from './Connection/index.js';
import Table from './Table/index.js';
import renovacao from 'APIv3/router/renovacao/index.js';
import consultar from 'APIv3/src/api/consultar/index.js';
import whatsapp from 'APIv3/src/api/whatsapp/index.js';
import dateFormat from './whatsapp/index.js';
import envio from './reqt/index.js';
import hora from './consultar/index.js';
import lib from './consultar/index.js';
import log from './consultar/index.js';
import normalize from './consultar/index.js';
import process from './consultar/index.js';
import save from './consultar/index.js';




const renovacao = Router();
const connectionInstance = new Connection();
const tableInstance = new Table();
const dateFormatInstance = new dateFormat();
const envioInstance = new envio();
const horaInstance = new hora();
const libInstance = new lib();
const logInstance = new log();
const normalizeInstance = normalizenew ();
const processInstance = processnew ();
const saveInstance = new save();
const whatsappInstance = new whatsapp();
const reqtInstance = new reqt();
const consultarInstance = new consultar();


