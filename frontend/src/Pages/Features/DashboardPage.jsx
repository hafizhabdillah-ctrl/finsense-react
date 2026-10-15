import React from 'react';
import StatDashboard from '../../Components/Features/Dashboard/StatDashboard';
import GrafikDashboard from '../../Components/Features/Dashboard/GrafikDashboard';
import StokDashboard from '../../Components/Features/Dashboard/StokDashboard';
import { useDashboardData } from '../../hooks/useDashboardData';

function DashboardPage() {
  // Data diambil sekali di level halaman, lalu dibagikan ke komponen anak lewat props
  const dashboard = useDashboardData();

  return (
    <div>
      <h1 className='text-xl md:text-2xl font-bold'>
        Statistik Penjualan
      </h1>
      <p className='mx-2 mb-4 md:mb-6 text-gray-500 text-sm'>
        {new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <StatDashboard {...dashboard} />
      {/* Grafik 3/4 lebar, Rekomendasi Restok 1/4 lebar (desktop) */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
        <div className='lg:col-span-3'>
          <GrafikDashboard
            chartData={dashboard.chartData}
            loading={dashboard.loading}
          />
        </div>
        <div className='lg:col-span-1'>
          <StokDashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
