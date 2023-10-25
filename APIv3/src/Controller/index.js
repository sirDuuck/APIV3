import 'dotenv/config';
import { Router } from 'express';
import ConsultarCNPJ from 'APIv3/src/api/ConsultarCnpj/index.js';
import LogRegister from 'APIv3/src/Lib/LogRegister/index.js';
import ERP_Log from 'APIv3/src/db/Table/ERP_Log/index.js';
import Process1 from 'APIv3/src/Lib/Process1/index.js';
import Whatsapp from 'APIv3/src/api/Whatsapp/index.js';
import Fcweb from 'APIv3/src/db/Table/Fcweb/index.js';
import Config from 'APIv3/src/Lib/Config/index.js';
import ERP from 'APIv3/src/db/table/ERP/index.js';
import Save from 'APIv3/src/Lib/Save/index.js';


const Controller = Router();

Controller.get('/cnpj', async (req, res) => {
    const { cnpj } = req.query;

    if (!cnpj) {
        return res.status(400).json({ error: 'O parâmetro CNPJ é obrigatório' });
    }
    try {
        const cnpjData = await ConsultarCNPJ.getCNPJ(cnpj);
        res.json(cnpjData);
    } catch (error) {
        console.error('Erro ao consultar CNPJ', error);
        res.status(500).json({ error: 'Erro ao consultar CNPJ' });
    }

});

Controller.get('/log-register', async (req, res) => {
    try {
        const data = {
            user: req.query.user || '',
            clienteId: req.query.clienteId || '',
            clienteTel: req.query.clienteTel || '',
            clienteName: req.query.clienteName || '',
            clienteValor: req.query.clienteValor || '',
            error: req.query.error || '',
        };

        const result = await LogRegister(data);
        res.jason(result);
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ error: 'Erro no registro' });
    }
});

Controller.get('/erp-log', async (req, res) => {
    try {
        const logs = await ERP_Log.findAll({
            where: {
                user: req.query.user || '',
                createdAt: req.query.clienteAt || '',
                clienteId: req.query.clienteId || '',
                clienteTel: req.query.clienteTel || '',
                clienteName: req.query.clienteName || '',
                clienteValor: req.query.clienteValor || '',
                updatedAt: req.query.updatedAte || '',
                error: req.query.error || '', // Você deve definir o campo 'error' com base nos parâmetros de consulta apropriados
            }
        });

        res.json(logs);
    } catch (error) {
        console.error('Erro ao buscar registro do ERP_LOG', error);
        res.status(500).json({ error: 'Erro ao buscar registros do ERP_LOG' });
    }
});


Controller.get('/process1', (req, res) => {

});

Controller.get('/whatsapp', (req, res) => {

});

Controller.get('/fcweb', (req, res) => {

});

Controller.get('/config', (req, res) => {

});

Controller.get('/erp', (req, res) => {

});

Controller.get('/save', (req, res) => {

});
export default Controller;