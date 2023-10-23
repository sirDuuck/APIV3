import Connection from './Connection/index.js';
import Table from './Table/index.js';

const connectionInstance = new Connection();
const tableInstance = new Table();


export default {
    connection: connectionInstance,
    table: tableInstance,
};