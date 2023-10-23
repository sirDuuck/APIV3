import "dotenv/config";
import { Router } from "express";
import { Op } from "sequelize";
import Connection from './Connection/index.js';
import Table from './Table/index.js';
import renovacao from 'APIv3/router/renovacao/index.js';
import consultar from 'APIv3/src/api/consultar/index.js';
import whatsapp from 'APIv3/src/api/whatsapp/index.js';
import ..... from './..../....';
import ..... from './..../....';
import ..... from './..../....';
import ..... from './..../....';
import ..... from './..../....';





const renovacao = Router();
const connectionInstance = new Connection();
const tableInstance = new Table();