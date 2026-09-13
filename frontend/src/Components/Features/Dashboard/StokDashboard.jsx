import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

// Rekomendasi Restok: daftar produk yang stoknya menipis (stok <= stok minimum)
const StokDashboard = () => {
  const [lowStockList, setLowStockList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLowStock = async () => {
      setLoading(true);
      try {
        const productsRes = await api.get('/products');
        const products = productsRes.data || [];
        setLowStockList(products.filter((p) => p.stock <= p.min_stock));
      } catch (err) {
        console.error('Gagal mengambil data produk', err);
        setLowStockList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLowStock();
  }, []);

  return (
    <div className='h-full bg-white p-4 border border-gray-300 rounded-md shadow-sm'>
      <h2 className='font-bold text-lg mb-2'>Rekomendasi Restok</h2>
      {loading ? (
        <p className='text-gray-500'>Memuat data stok...</p>
      ) : lowStockList.length === 0 ? (
        <p className='text-gray-500'>Semua produk aman, tidak perlu restok.</p>
      ) : (
        <ul>
          {lowStockList.map((p) => (
            <li
              key={p.id}
              className='mb-2 border-b border-gray-300 pb-1 text-sm'
            >
              <span className='font-medium'>{p.name}</span> - Stok: {p.stock}{' '}
              (min: {p.min_stock})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StokDashboard;
