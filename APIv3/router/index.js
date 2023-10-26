import {Router} from "express"
import ControllerGeral from "../src/Controller/index.js";

const renovacao = Router();


renovacao.post("/register/v2/:authorization/:nome/:cnpj/:email/:telefone", ControllerGeral.RenovacaoURL)
