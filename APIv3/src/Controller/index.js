import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import { getCNPJ } from "APIv3/src/api/consultarCnpj/index.js";
import ERP from "APIv3/src/db/table/erp/index.js";
import ERP_LOG from "APIv3/src/db/table/erp_log/index.js";
import Fcweb from "APIv3/src/db/table/fcweb/index.js";
import Config from "APIv3/src/lib/config/config.js";
import { LogRegister } from "APIv3/src/lib/LogRegister/index.js";
import { Process1 } from "APIv3/src/lib/Process1/index.js";
import { Save } from "APIv3/src/lib/Save/index.js";

const renovacao = Controller();