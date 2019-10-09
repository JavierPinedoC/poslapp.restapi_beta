'use strict';
module.exports = (sequelize, DataTypes) => {
  const Equipolaboratorios = sequelize.define('Equipolaboratorios', {
    id_equipolab: DataTypes.INTEGER,
    descripcion_equipolab: DataTypes.STRING,
    nombre_equipolab: DataTypes.STRING,
    imagen_equiolab: DataTypes.STRING,
    fecha_mantenimiento_equipolab: DataTypes.DATE
  }, {});
  Equipolaboratorios.associate = function(models) {
    // associations can be defined here
  };
  return Equipolaboratorios;
};