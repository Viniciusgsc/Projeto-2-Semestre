const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const pacientes = require('../api/models/pacientesModels')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão estabelecida Mysql')
} catch (error) {
    console.log('Falha na conexão Mysql!!!')
}

pacientes.init(conexao)


module.exports = conexao;
