import { Express } from "express";
import { Agenda } from "APIv3/src/controller/renovacaoAgenda/index.js";
import { Check } from "APIv3/src/controller/renovacaoCheck/index.js";
import { List } from "APIv3/src/controller/renovacaoList/index.js";
import { Registro } from "APIv3/src/controller/renovacaoRegistro/index.js";
import { Url } from "APIv3/src/controller/renovacaoUrl/index.js";

export async function ProcessRenovacao(req, res){
    try {
        const data= req.body
        const token = req.params.authorization;
        
    } catch (error) {
        
    }
}