import { Express } from "express";
import { Agenda } from "APIv3/src/Controller/RenovacaoAgenda/index.js";
import { Check } from "APIv3/src/Controller/RenovacaoCheck/index.js";
import { List } from "APIv3/src/Controller/RenovacaoList/index.js";
import { Registro } from "APIv3/src/Controller/RenovacaoRegistro/index.js";
import { Url } from "APIv3/src/Controller/RenovacaoUrl/index.js";
import { RenovacaoCheck } from "/APIv3/src/Controller/RenovacaoCheck/index.js";

export async function ProcessRenovacao(req, res) {
    try {
        const data = req.body
        const token = req.params.authorization;

    } catch (error) {

    }
}

export default Renovacao