import React from 'react';
import { useProducts } from '../../../hooks/useProducts';

function StatStock() {
  const { products, loading } = useProducts();
  const totalProducts = products.length;
  const lowStock = products.filter((p) => p.stock <= p.min_stock).length;

  if (loading)
    return <div className='flex w-full gap-4 mt-4'>Memuat statistik...</div>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 border-gray-300 gap-4 mt-4'>
      <div className='relative flex-1 flex flex-col justify-between bg-white p-4 border rounded-md border-gray-300 shadow-sm'>
        <h1 className='text-gray-500 font-bold text-sm uppercase tracking-wider'>
          PRODUK AKTIF
        </h1>
        <p className='flex items-center gap-2 text-2xl font-bold text-sky-950'>
          <span>{totalProducts}</span>
          <span className='relative text-sm top-1'>Barang</span>
        </p>
      </div>
      <div className='relative flex-1 flex flex-col justify-between bg-white p-4 border rounded-md border-gray-300 shadow-sm'>
        <h1 className='text-gray-500 font-bold text-sm uppercase tracking-wider'>
          PRODUK MENIPIS
        </h1>
        <p className='flex items-center gap-2 text-2xl font-bold text-sky-950'>
          <span>{lowStock}</span>
          <span className='relative text-sm top-1'>Barang</span>
        </p>
      </div>
    </div>
  );
}

export default StatStock;
