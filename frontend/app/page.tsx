import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Examen Segundo Parcial - Desarrollo Web II</h1>
      <ul>
        <li><Link href="/PromedioCategoria">Promedio de valor por categoría (Lineal)</Link></li>
        <li><Link href="/CantidadMarca">Cantidad de productos por marca (Pie)</Link></li>
      </ul>
    </div>
  );
}