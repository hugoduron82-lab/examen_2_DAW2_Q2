'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getPromedioPorCategoria } from '../../Servicios/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PromedioCategoria() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPromedioPorCategoria();
        const labels = data.map((item: any) => item.categoryCode);
        const values = data.map((item: any) => parseFloat(item.promedio));
        setChartData({
          labels,
          datasets: [
            {
              label: 'Promedio de valor por categoría',
              data: values,
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener datos de PromedioCategoria:', error);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Cargando...</div>;

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '2rem' }}>
      <h1>Promedio de valor por categoría</h1>
      <Line data={chartData} />
    </div>
  );
}