'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    id_rol: DataTypes.INTEGER,
    nombre_rol: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};