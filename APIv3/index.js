import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swagerDoc from '' assert {type: "json" };
import cors from 'cors';
import ControllerGeral from './src/Controller';


const port = process.env.Port
const app = express();
const renovacao = ControllerGeral();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use('./api-docs', swaggerUi.serve, swaggerUi.setup(swagerDoc))

app.use("/v3", renovacao)
app.listen(port, function () {
    console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
});