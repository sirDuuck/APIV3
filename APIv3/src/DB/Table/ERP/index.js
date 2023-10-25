import Sequelize from "sequelize";

const ERP = database.define(
  "erp",
  {
    //nome da tabela a ser conectada
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: Sequelize.TEXT,
    fantasia: Sequelize.TEXT,
    email: Sequelize.TEXT,
    end: Sequelize.TEXT,
    bairro: Sequelize.TEXT,
    numero: Sequelize.INTEGER(11),
    cidade: Sequelize.TEXT,
    pais: Sequelize.TEXT,
    Ie: Sequelize.TEXT,
    tel: Sequelize.TEXT,
    whatsapp: Sequelize.TEXT,
    a1pf: Sequelize.INTEGER(11),
    a3pf: Sequelize.INTEGER(11),
    a1pj: Sequelize.INTEGER(11),
    a3pj: Sequelize.INTEGER(11),
    status: Sequelize.INTEGER(11),
    regime: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    cnpj: Sequelize.TEXT,
    authorization: Sequelize.TEXT,
    repasse: Sequelize.INTEGER(11),
    unidade: Sequelize.TEXT
  },
  { freezeTableName: true }
); // função para conectar tebela ja criada

//criar ou sincronizar a tabela
// ERP.sync();

export default ERP;
