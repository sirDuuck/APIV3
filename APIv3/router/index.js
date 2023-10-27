import { Router } from "express"
import ControllerGeral from "../src/Controller/index.js";

const renovacao = Router();

//Post
renovacao.post("/register/v2/:authorization/:nome/:cnpj/:email/:telefone", ControllerGeral.RenovacaoURL) //ceerto
renovacao.post("/register/:authorization", ControllerGeral.RenovacaoRegistroAuthorization) // Erro atravez da pasta "config"
renovacao.post("/agenda", ControllerGeral.RenovacaoAgenda) //ceerto
renovacao.post("/registro", ControllerGeral.RenovacaoRegistro) /*ceerto ( id: 173. Unico ID que apareceu n sei se tinha que guardar mas guardei)
*/
//Get
renovacao.get("/check/erp/:authorization", ControllerGeral.RenovacaoCheck) //ceerto
renovacao.get("/check/valid/:cnpj", ControllerGeral.RenovacaoCheckCnpj) //ceerto
renovacao.get("/list/user/max/polo", ControllerGeral.RenovacaoList) //ceerto

export default renovacao