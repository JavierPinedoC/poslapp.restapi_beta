'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zonaslaboratorios = sequelize.define('Zonaslaboratorios', {
    id_zonalab: DataTypes.INTEGER,
    nombre_sonalab: DataTypes.STRING,
    descripcion_zonalab: DataTypes.STRING
  }, {});
  Zonaslaboratorios.associate = function(models) {
    // associations can be defined here
  };
  return Zonaslaboratorios;
};