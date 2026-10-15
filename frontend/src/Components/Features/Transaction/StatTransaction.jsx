import React, { useMemo } from 'react';

const isThisMonth = (dateString) => {
  const d = new Date(dateString);
  const today = new Date();
  return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth();
};

// transactions: transaksi BULAN INI, diambil oleh TransactionPage
function StatTransaction({ transactions = [] }) {

  // Pemasukan, pengeluaran, dan jumlah transaksi BULAN INI
  const totals = useMemo(() => {
    let income = 0;
    let expense = 0;
    let count = 0;
    transactions.forEach((t) => {
      if (!isThisMonth(t.transaction_date)) return;
      count += 1;
      if (t.type === 'income') income += t.amount;
      else expense += t.amount;
    });
    return { income, expense, count };
  }, [transactions]);

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
          <span>{totals.count}</span>
          <span className='relative text-sm top-1'>Transaksi</span>
        </p>
      </div>
    </div>
  );
}

export default StatTransaction;
