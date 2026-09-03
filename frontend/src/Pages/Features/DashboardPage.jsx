import React from 'react';
import StatDashboard from '../../Components/Features/Dashboard/StatDashboard';
import GrafikDashboard from '../../Components/Features/Dashboard/GrafikDashboard';
import StokDashboard from '../../Components/Features/Dashboard/StokDashboard';
import LakuDashboard from '../../Components/Features/Dashboard/LakuDashboard';

function DashboardPage() {
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
      <StatDashboard />
      <div className='flex flex-col lg:flex-row gap-4 mt-4'>
        <GrafikDashboard />
        <StokDashboard />
      </div>
      <div className='mt-4'>
        <LakuDashboard />
      </div>
    </div>
  );
}

export default DashboardPage;
