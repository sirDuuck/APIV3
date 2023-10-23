import Connection from './conection';
import Table from './table';

const connectionInstance = new Connection();
const tableInstance = new Table();


export default {
    connection: connectionInstance,
    table: tableInstance,
};