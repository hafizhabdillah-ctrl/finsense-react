import React, { useState } from 'react';
import StatTransaction from '../../Components/Features/Transaction/StatTransaction';
import TableTransaction from '../../Components/Features/Transaction/TableTransaction';
import SummaryTransaction from '../../Components/Features/Transaction/SummaryTransaction';
import { useNavigate } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { useTransactions } from '../../hooks/useTransactions';

// Rentang BULAN INI (waktu lokal): tanggal 1 pukul 00:00 s/d tanggal terakhir pukul 23:59:59
const now = new Date();
const MONTH_RANGE = {
  startDate: new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0).toISOString(),
  endDate: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999).toISOString(),
};

function TransactionPage() {
  const navigate = useNavigate();
  // Data diambil sekali di level halaman: semua transaksi (tabel & ringkasan) + transaksi bulan ini (statistik)
  const { transactions, loading } = useTransactions();
  const { transactions: monthTransactions } = useTransactions(MONTH_RANGE);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Reset filter
  const handleReset = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
        <div>
          <h1 className='text-2xl font-bold'>Catatan keuangan</h1>
          <p className='text-gray-500 text-sm mt-1'>
            {new Date().toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
        <button
          onClick={() => navigate('/new?type=transaction')}
          className='flex items-center gap-2 bg-sky-950 p-2 px-4 text-white rounded-lg font-semibold border hover:bg-white hover:text-sky-950 transition cursor-pointer'
        >
          <FaCirclePlus size={16} /> Tambah Transaksi
        </button>
      </div>
      <StatTransaction transactions={monthTransactions} />

      {/* Filter Tanggal */}
      <div className='flex flex-wrap items-center gap-4 mt-4 px-2'>
        <div className='flex items-center gap-2'>
          <FaCalendarAlt className='text-gray-500' />
          <span className='font-medium text-gray-700'>Filter Tanggal:</span>
        </div>
        <div className='flex flex-wrap gap-2 items-center'>
          <input
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
            placeholder='Mulai'
          />
          <span className='text-gray-500'>s/d</span>
          <input
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500'
            placeholder='Selesai'
          />
          <button
            onClick={handleReset}
            className='px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md transition'
          >
            Reset
          </button>
        </div>
      </div>

      <div className='overflow-x-auto mt-2'>
        <TableTransaction
          transactions={transactions}
          loading={loading}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className='mt-4'>
        <hr />
      </div>
      <h1 className='p-2 text-2xl font-bold mt-2'>Ringkasan Keuangan</h1>
      <SummaryTransaction transactions={transactions} />
    </div>
  );
}

export default TransactionPage;
