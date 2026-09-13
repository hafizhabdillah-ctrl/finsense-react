import React from 'react';
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
import { useDashboardData } from '../../../hooks/useDashboardData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function GrafikDashboard() {
  const { chartData, loading } = useDashboardData();

  const data = {
    labels: chartData.dates,
    datasets: [
      {
        label: 'Pemasukan (Rp)',
        data: chartData.amounts,
        borderColor: '#0c4a6e',
        backgroundColor: 'rgba(12, 74, 110, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Penjualan 7 Hari Terakhir' },
    },
  };

  return (
    <div className='w-full h-full p-4 bg-white border border-gray-300 rounded-md shadow-sm overflow-x-auto'>
      {loading ? (
        <p className='text-gray-500'>Memuat grafik...</p>
      ) : (
        <div className='min-w-[300px]'>
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
}

export default GrafikDashboard;
