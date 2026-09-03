import React from 'react';
import NewItem from '../../Components/NewItem/NewItem';

function NewPage() {
  return (
    <div className="py-2 px-4">

      {/* Header */}
      <h1 className="p-2 text-gray-700 text-2xl font-bold">Tambah Item Baru</h1>
      <p className="px-2 text-gray-500 text-sm">Pilih kategori item yang ingin ditambahkan lalu isi formulir di bawah.</p>

      <NewItem />
    </div>
  );
}

export default NewPage;