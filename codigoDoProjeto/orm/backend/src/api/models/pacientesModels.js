const { Model, DataTypes } = require('sequelize');

class Pacientes extends Model {
    static init(sequelize) {
        super.init({
            pac_descricao: DataTypes.STRING,
            pac_peso: DataTypes.DECIMAL(10,2),
            pac_altura: DataTypes.DECIMAL(10,2),
            pac_idade: DataTypes.DECIMAL(3),
            pac_sexo: DataTypes.STRING,

           

        }, { sequelize });

    }
}

module.exports = Pacientes;