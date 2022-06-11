'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('pacientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pac_descricao: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      pac_peso: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      pac_altura: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      pac_sexo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      pac_idade: {
        type: Sequelize.DECIMAL(3),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('pacientes')
  }
};

