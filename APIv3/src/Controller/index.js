import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import { getCNPJ } from "APIv3/src/api/ConsultarCnpj/index.js";
import ERP from "APIv3/src/db/table/ERP/index.js";
import ERP_LOG from "APIv3/src/db/Table/ERP_Log/index.js";
import Fcweb from "APIv3/src/db/Table/Fcweb/index.js";
import Config from "APIv3/src/Lib/Config/index.js";
import { LogRegister } from "APIv3/src/Lib/LogRegister/index.js";
import { Process1 } from "APIv3/src/Lib/Process1/index.js";
import { Save } from "APIv3/src/Lib/Save/index.js";

const Renovacao = Controller();