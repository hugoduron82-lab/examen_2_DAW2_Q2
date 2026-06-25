'use client';

import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getCantidadPorMarca } from '../../Servicios/api';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CantidadMarca() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCantidadPorMarca();
        const labels = data.map((item: any) => item.brandCode);
        const values = data.map((item: any) => item.cantidad);
        // Colores para cada marca (puedes ampliar la lista)
        const colors = [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#FF6384', '#C9CBCF', '#FFB1C1', '#9AD0F5'
        ];
        setChartData({
          labels,
          datasets: [
            {
              label: 'Cantidad de productos por marca',
              data: values,
              backgroundColor: colors.slice(0, labels.length),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener datos de CantidadMarca:', error);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Cargando...</div>;

  return (
    <div style={{ width: '60%', margin: '0 auto', padding: '2rem' }}>
      <h1>Cantidad de productos por marca</h1>
      <Pie data={chartData} />
    </div>
  );
}