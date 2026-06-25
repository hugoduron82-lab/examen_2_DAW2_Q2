const { Sequelize } = require('sequelize');

// Ajusta estos valores según tu configuración de MySQL
const sequelize = new Sequelize(
  'graficos',
   'root',
    'ZoeVic12052021', 
    { 
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false, // Cambia a true si quieres ver las consultas SQL en consola
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