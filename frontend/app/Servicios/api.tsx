import axios from 'axios';

const API_URL = 'http://localhost:5001';

export const getPromedioPorCategoria = async () => {
  const response = await axios.get(`${API_URL}/promedio-por-categoria`);
  return response.data.data;
};

export const getCantidadPorMarca = async () => {
  const response = await axios.get(`${API_URL}/cantidad-por-marca`);
  return response.data.data;
};