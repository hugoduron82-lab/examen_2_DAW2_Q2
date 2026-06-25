const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'graficos',
   'root',
    'ZoeVic12052021', 
    { 
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a MySQL establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar con MySQL:', error);
  }
})();

module.exports = sequelize;