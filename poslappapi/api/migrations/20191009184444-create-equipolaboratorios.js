'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equipolaboratorios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_equipolab: {
        type: Sequelize.INTEGER
      },
      descripcion_equipolab: {
        type: Sequelize.STRING
      },
      nombre_equipolab: {
        type: Sequelize.STRING
      },
      imagen_equiolab: {
        type: Sequelize.STRING
      },
      fecha_mantenimiento_equipolab: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equipolaboratorios');
  }
};