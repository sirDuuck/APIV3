import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import { getCNPJ } from "APIv3/src/api/consultar/index.js";
import ERP from "../src/db/table/erp.js";
import ERP_LOG from "../src/db/table/erp_log.js";
import Fcweb from "../src/db/table/fcweb.js";
import Config from "../src/lib/config.js";
import { LogRegister } from "../src/lib/log.js";
import { Process1 } from "../src/lib/process.js";
import { Save } from "../src/lib/save.js";





const renovacao = Router();

// Defina suas rotas aqui como antes

export default renovacao;
