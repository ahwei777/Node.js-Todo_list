'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      to_do_id: {
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      reserved_time: {
        type: Sequelize.STRING
      },
      modified_time: {
        type: Sequelize.STRING
      },
      brief: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};