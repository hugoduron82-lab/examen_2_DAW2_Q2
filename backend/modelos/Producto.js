const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/db');

const Producto = sequelize.define('product_v6', {
  partNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  productType: DataTypes.STRING,
  categoryCode: DataTypes.STRING,
  brandCode: DataTypes.STRING,
  familyCode: DataTypes.STRING,
  lineCode: DataTypes.STRING,
  productSegmentCode: DataTypes.STRING,
  status: DataTypes.STRING,
  value: DataTypes.DOUBLE,
  valueCurrency: DataTypes.STRING,
  defaultQuantityUnits: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  plannerCode: DataTypes.STRING,
  sourceLink: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'product_v6',
});

module.exports = Producto;