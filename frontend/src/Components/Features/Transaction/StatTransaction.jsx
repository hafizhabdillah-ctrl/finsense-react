import React, { useMemo } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';

function StatTransaction() {
  // Filter hanya bulan ini
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    .toISOString()
    .split('T')[0];
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    .toISOString()
    .split('T')[0];

  const { transactions, loading } = useTransactions({
    startDate: startOfMonth,
    endDate: endOfMonth,
  });

  const totals = useMemo(() => {
    let income = 0,
      expense = 0;
    transactions.forEach((t) => {
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
    });
    return { income, expense };
  }, [transactions]);

  // Total transaksi bulan ini (bandingkan tahun + bulan, bukan tanggal)
  const totalTransactionsThisMonth = useMemo(() => {
    return transactions.filter((t) => {
      const d = new Date(t.transaction_date);
      return (
        d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
      );
    }).length;
  }, [transactions]);

  // if (loading) {return <div className='flex w-1/2 gap-4 mt-4'>Memuat...</div>};

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
      <div className='relative flex-1 flex flex-col justify-between bg-white p-4 border rounded-md border-gray-300 shadow-sm'>
        <h1 className='text-gray-500 font-bold text-sm uppercase'>
          PEMASUKAN
        </h1>
        <p className='flex items-center gap-2 text-2xl font-bold text-sky-950'>
          <span>Rp.</span>
          <span>{totals.income.toLocaleString()}</span>
        </p>
      </div>
      <div className='relative flex-1 flex flex-col justify-between bg-white p-4 border rounded-md border-gray-300 shadow-sm'>
        <h1 className='text-gray-500 font-bold text-sm uppercase'>
          PENGELUARAN
        </h1>
        <p className='flex items-center gap-2 text-2xl font-bold text-sky-950'>
          <span>Rp.</span>
          <span>{totals.expense.toLocaleString()}</span>
        </p>
      </div>
      <div className='relative flex-1 flex flex-col justify-between bg-white p-4 border rounded-md border-gray-300 shadow-sm'>
        <h1 className='text-gray-500 font-bold text-sm uppercase'>
          TOTAL TRANSAKSI
        </h1>
        <p className='flex items-center gap-2 text-2xl font-bold text-sky-950'>
          <span>{totalTransactionsThisMonth}</span>
          <span className='relative text-sm top-1'>Transaksi</span>
        </p>
      </div>
    </div>
  );
}

export default StatTransaction;
