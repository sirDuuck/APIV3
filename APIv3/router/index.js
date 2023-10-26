import { Router } from "express"
import ControllerGeral from "../src/Controller/index.js";

const renovacao = Router();

//Post
renovacao.post("/register/v2/:authorization/:nome/:cnpj/:email/:telefone", ControllerGeral.RenovacaoURL)
renovacao.post("/register/:authorization", ControllerGeral.RenovacaoRegistroAuthorization)
renovacao.post("/agenda", ControllerGeral.RenovacaoAgenda)
renovacao.post("/registro", ControllerGeral.RenovacaoRegistro)

//Get
renovacao.get("/check/erp/:authorization", ControllerGeral.RenovacaoCheck)
renovacao.get("/check/valid/:cnpj", ControllerGeral.RenovacaoCheckCnpj)
renovacao.get("list/user/max/polo", ControllerGeral.RenovacaoList)

export default renovacao