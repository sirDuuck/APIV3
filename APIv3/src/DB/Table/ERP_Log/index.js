import { Sequelize } from "sequelize";
import DataBase from "../../Connection/index.js";

const ERP_LOG = DataBase.define(
  "erp_log",
  {
    //nome da tabela a ser conectada
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    clienteId: Sequelize.INTEGER,
    clienteTel: Sequelize.TEXT,
    clienteName: Sequelize.TEXT,
    clienteValor: Sequelize.TEXT,
    updatedAt: Sequelize.DATE,
    error: Sequelize.TEXT,
  },
  { freezeTableName: true }
); 

export default ERP_LOG
