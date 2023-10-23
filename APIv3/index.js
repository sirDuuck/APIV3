import express from 'express';
import swaggerUi from 'swagger-ui-express'
import renovacao from 'APIv3/router/index.js';
import swagerDoc from '' assert {type: "json" };
import cors from 'cors';

const port = process.env.Port
const app = express ();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use('./api-docs', swagerUi.server, swaggerUi.setup(swagerDoc))

app.use("/v3", renovacao)
app.listen(port, function(){
    console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
});