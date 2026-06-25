const express = require('express');
const cors = require('cors');
const { Op } = require('sequelize'); 
const sequelize = require('./conexion/db');
const Producto = require('./modelos/Producto');

const app = express();
const PORT = 5001; 

app.use(cors());
app.use(express.json());

// 🔹 Endpoint 1: Promedio de valor por categoría (Lineal)
app.get('/promedio-por-categoria', async (req, res) => {
  try {
    const resultados = await Producto.findAll({
      attributes: [
        'categoryCode',
        [sequelize.fn('AVG', sequelize.col('value')), 'promedio']
      ],
      where: {
        categoryCode: { [Op.ne]: null },
        value: { [Op.ne]: null }
      },
      group: ['categoryCode'],
      raw: true,
    });
    res.json({
      message: 'Promedio de valor por categoría',
      data: resultados,
    });
  } catch (error) {
    console.error('Error en /promedio-por-categoria:', error);
    res.status(500).json({ 
      error: 'Error en el servidor',
      details: error.message 
    });
  }
});

// 🔹 Endpoint 2: Cantidad de productos por marca (Pie)
app.get('/cantidad-por-marca', async (req, res) => {
  try {
    const resultados = await Producto.findAll({
      attributes: [
        'brandCode',
        [sequelize.fn('COUNT', sequelize.col('partNumber')), 'cantidad']
      ],
      where: {
        brandCode: { [Op.ne]: null }
      },
      group: ['brandCode'],
      raw: true,
    });
    res.json({
      message: 'Cantidad de productos por marca',
      data: resultados,
    });
  } catch (error) {
    console.error('Error en /cantidad-por-marca:', error);
    res.status(500).json({ 
      error: 'Error en el servidor',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});