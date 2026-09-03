import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTransactions } from '../../hooks/useTransactions';
import { useProducts } from '../../hooks/useProducts';
import { useDebts } from '../../hooks/useDebts';
import { useStockLogs } from '../../hooks/useStockLogs';
import { getProducts } from '../../services/productService';
import Swal from 'sweetalert2';

/* eslint-disable camelcase */

const TABS = [
  { key: 'product', label: 'Produk' },
  { key: 'transaction', label: 'Transaksi' },
  { key: 'pos', label: 'POS' },
  { key: 'debt', label: 'Hutang' },
  { key: 'log', label: 'Log Stok' },
];

const inputClass = 'w-full p-2 border-2 border-gray-300 rounded-lg';
const fieldWrapClass = 'px-2 mt-4 relative flex flex-col gap-2';
const submitClass =
  'flex items-center py-2 px-4 mx-2 mt-4 gap-2 cursor-pointer bg-sky-950 text-white font-semibold border rounded-lg hover:bg-white hover:text-sky-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed';

function TransactionForm() {
  const navigate = useNavigate();
  const { addTransaction } = useTransactions();
  const [date, setDate] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [submitting, setSubmitting] = useState(false);
  const [categories] = useState([
    { id: 1, name: 'Penjualan' },
    { id: 2, name: 'Restok' },
    { id: 3, name: 'Operasional' },
    { id: 4, name: 'Gaji Karyawan' },
    { id: 5, name: 'Bayar Hutang' },
    { id: 6, name: 'Hutang Pelanggan' },
  ]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!category_id || !amount) {
      Swal.fire('Perhatian', 'Lengkapi data kategori dan nominal', 'info');
      return;
    }
    setSubmitting(true);
    const payload = {
      category_id: parseInt(category_id),
      amount: parseFloat(amount),
      description,
      transaction_date: date,
      type,
      source: 'manual',
    };
    const result = await addTransaction(payload);
    setSubmitting(false);
    if (result) navigate('/transactions');
  };

  return (
    <form className='max-w-2xl' onSubmit={onSubmitHandler}>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Waktu:</span>
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClass}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Kategori:</span>
        <select
          value={category_id}
          onChange={(e) => setCategoryId(e.target.value)}
          className={inputClass}
          required
        >
          <option value=''>Pilih kategori</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Keterangan:</span>
        <input
          type='text'
          placeholder='Masukan keterangan...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Nominal:</span>
        <input
          type='number'
          placeholder='Masukan nominal...'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={inputClass}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Tipe:</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputClass}
        >
          <option value='income'>Masuk</option>
          <option value='expense'>Keluar</option>
        </select>
      </div>
      <button type='submit' disabled={submitting} className={submitClass}>
        {submitting ? 'Menyimpan...' : 'Konfirmasi'}
      </button>
    </form>
  );
}

function ProductForm() {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [min_stock, setMinStock] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!name || !sku) {
      Swal.fire({
        title: 'Mohon isi seluruh data',
        icon: 'info',
      });
      return;
    }
    setSubmitting(true);
    const productData = {
      name,
      sku,
      stock: stock ? parseInt(stock) : 0,
      unit: unit || null,
      price: price ? parseFloat(price) : null,
      min_stock: min_stock ? parseInt(min_stock) : 10,
    };
    const result = await addProduct(productData);
    setSubmitting(false);
    if (result) navigate('/stocks');
  };

  return (
    <form className='max-w-2xl' onSubmit={onSubmitHandler}>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Nama Barang:</span>
        <input
          type='text'
          placeholder='Masukan nama barang...'
          className={inputClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>SKU Barang:</span>
        <input
          type='text'
          placeholder='Masukan SKU...'
          className={inputClass}
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Jumlah Stok:</span>
        <input
          type='number'
          placeholder='Masukan jumlah barang...'
          className={inputClass}
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Satuan (opsional):</span>
        <input
          type='text'
          placeholder='Masukan satuan barang...'
          className={inputClass}
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Harga (opsional):</span>
        <input
          type='number'
          placeholder='Masukan harga barang...'
          className={inputClass}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Minimal Stok (default 10):</span>
        <input
          type='number'
          placeholder='Masukan jumlah minimal barang...'
          className={inputClass}
          value={min_stock}
          onChange={(e) => setMinStock(e.target.value)}
        />
      </div>
      <button type='submit' disabled={submitting} className={submitClass}>
        {submitting ? 'Menyimpan...' : 'Tambah Barang'}
      </button>
    </form>
  );
}

function DebtForm() {
  const navigate = useNavigate();
  const { addDebt } = useDebts();
  const [customer_name, setCustomerName] = useState('');
  const [total_debt, setTotalDebt] = useState('');
  const [due_date, setDueDate] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!customer_name || !total_debt || !due_date) {
      Swal.fire({
        title: 'Mohon isi seluruh data',
        icon: 'info',
      });
      return;
    }
    setSubmitting(true);
    const success = await addDebt({
      customer_name,
      total_debt: Number(total_debt),
      due_date,
    });
    setSubmitting(false);
    if (success) navigate('/debts');
  };

  return (
    <form className='max-w-2xl' onSubmit={onSubmitHandler}>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Nama Orang:</span>
        <input
          type='text'
          placeholder='Masukan nama orang...'
          className={inputClass}
          value={customer_name}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Total Hutang:</span>
        <input
          type='number'
          placeholder='Masukan total hutang...'
          className={inputClass}
          value={total_debt}
          onChange={(e) => setTotalDebt(e.target.value)}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Jatuh Tempo:</span>
        <input
          type='date'
          className={inputClass}
          value={due_date}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type='submit' disabled={submitting} className={submitClass}>
        {submitting ? 'Menyimpan...' : 'Konfirmasi'}
      </button>
    </form>
  );
}

function LogForm() {
  const navigate = useNavigate();
  const { addLog } = useStockLogs();
  const [products, setProducts] = useState([]);
  const [product_id, setProductId] = useState('');
  const [type, setType] = useState('in');
  const [quantity, setQuantity] = useState('');
  const [note, setNote] = useState('');
  const [operator, setOperator] = useState('Admin');
  const [status, setStatus] = useState('completed');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        Swal.fire('Error', 'Gagal memuat daftar produk', 'error');
      }
    };
    fetchProducts();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!product_id || !quantity) {
      Swal.fire('Perhatian', 'Pilih produk dan isi jumlah', 'info');
      return;
    }
    setSubmitting(true);
    const logData = {
      product_id,
      type,
      quantity: parseInt(quantity),
      note: note || null,
      operator,
      status,
    };
    const result = await addLog(logData);
    setSubmitting(false);
    if (result) navigate('/logs');
  };

  return (
    <form className='max-w-2xl' onSubmit={onSubmitHandler}>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Produk:</span>
        <select
          className={inputClass}
          value={product_id}
          onChange={(e) => setProductId(e.target.value)}
          required
        >
          <option value=''>Pilih produk</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (SKU: {p.sku})
            </option>
          ))}
        </select>
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Tipe:</span>
        <select
          className={inputClass}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value='in'>Stok Masuk</option>
          <option value='out'>Stok Keluar</option>
          <option value='adjust'>Penyesuaian Manual</option>
        </select>
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Jumlah:</span>
        <input
          type='number'
          placeholder='Masukan jumlah barang...'
          className={inputClass}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Catatan (opsional):</span>
        <input
          type='text'
          placeholder='Masukan catatan barang...'
          className={inputClass}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Oleh:</span>
        <select
          className={inputClass}
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option>Admin</option>
          <option>Kasir</option>
          <option>Gudang</option>
        </select>
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Status:</span>
        <select
          className={inputClass}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='completed'>Selesai</option>
          <option value='pending_audit'>Menunggu audit</option>
        </select>
      </div>
      <button type='submit' disabled={submitting} className={submitClass}>
        {submitting ? 'Menyimpan...' : 'Konfirmasi'}
      </button>
    </form>
  );
}

function PosForm() {
  const navigate = useNavigate();
  const { addLog } = useStockLogs();
  const { addTransaction } = useTransactions();
  const [products, setProducts] = useState([]);
  const [product_id, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        Swal.fire('Error', 'Gagal memuat daftar produk', 'error');
      }
    };
    fetchProducts();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!product_id || !quantity) {
      Swal.fire('Perhatian', 'Pilih produk dan isi jumlah', 'info');
      return;
    }
    const product = products.find((p) => String(p.id) === String(product_id));
    if (!product) {
      Swal.fire('Error', 'Produk tidak ditemukan', 'error');
      return;
    }
    const qty = parseInt(quantity);
    setSubmitting(true);

    const logResult = await addLog({
      product_id,
      type: 'out',
      quantity: qty,
      note: 'Penjualan POS',
      operator: 'Kasir',
      status: 'completed',
    });
    if (!logResult) {
      setSubmitting(false);
      return;
    }

    const trxResult = await addTransaction({
      category_id: 1, // Penjualan
      amount: (product.price || 0) * qty,
      description: `Penjualan POS: ${product.name} x${qty}`,
      transaction_date: new Date().toISOString().slice(0, 10),
      type: 'income',
      source: 'pos',
    });
    setSubmitting(false);
    if (trxResult) navigate('/pos');
  };

  return (
    <form className='max-w-2xl' onSubmit={onSubmitHandler}>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Produk:</span>
        <select
          value={product_id}
          onChange={(e) => setProductId(e.target.value)}
          className={inputClass}
          required
        >
          <option value=''>Pilih Barang dari Stok</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} - Rp {p.price?.toLocaleString()}
            </option>
          ))}
        </select>
      </div>
      <div className={fieldWrapClass}>
        <span className='font-bold'>Jumlah:</span>
        <input
          type='number'
          className={inputClass}
          placeholder='Masukan jumlah barang...'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min='1'
          required
        />
      </div>
      <button type='submit' disabled={submitting} className={submitClass}>
        {submitting ? 'Memproses...' : 'Konfirmasi'}
      </button>
    </form>
  );
}

function NewItem() {
  const [searchParams] = useSearchParams();
  const validTabs = TABS.map((t) => t.key);
  const initialType = searchParams.get('type');
  const [type, setType] = useState(
    validTabs.includes(initialType) ? initialType : 'product',
  );

  return (
    <div className='p-2'>
      {/* Tab strip */}
      <div className='flex flex-wrap gap-2 border-b border-gray-300 mb-4'>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type='button'
            onClick={() => setType(tab.key)}
            className={`py-2 px-4 font-semibold rounded-t-md border border-b-0 transition-all cursor-pointer ${
              type === tab.key
                ? 'bg-sky-950 text-white border-sky-950'
                : 'bg-white text-sky-950 border-gray-300 hover:bg-sky-950 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form container */}
      <div className='py-2 px-2'>
        {type === 'product' && <ProductForm />}
        {type === 'transaction' && <TransactionForm />}
        {type === 'pos' && <PosForm />}
        {type === 'debt' && <DebtForm />}
        {type === 'log' && <LogForm />}
      </div>
    </div>
  );
}

export default NewItem;
