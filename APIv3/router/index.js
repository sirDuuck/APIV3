import { Router } from "express"
import ControllerGeral from "../src/Controller/index.js";

const renovacao = Router();

//Post
renovacao.post("/register/v2/:authorization/:nome/:cnpj/:email/:telefone", ControllerGeral.RenovacaoURL) //ceerto
renovacao.post("/register/:authorization", ControllerGeral.RenovacaoRegistroAuthorization) // Erro atravez da pasta "config"
renovacao.post("/agenda", ControllerGeral.RenovacaoAgenda) //ceerto
renovacao.post("/registro", ControllerGeral.RenovacaoRegistro) //esta dando erro no ERP_LOG que eu não locazei de onde ta viindo 



//Get
renovacao.get("/check/erp/:authorization", ControllerGeral.RenovacaoCheck) //ceerto
renovacao.get("/check/valid/:cnpj", ControllerGeral.RenovacaoCheckCnpj) //ceerto
renovacao.get("/list/user/max/polo", ControllerGeral.RenovacaoList) //ceerto

export default renovacao