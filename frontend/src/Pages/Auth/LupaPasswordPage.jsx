import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function LupaPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      const result = await forgotPassword(email);
      setMessage(result.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Gagal mengirim permintaan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-md'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-row '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-12 w-12 mb-2 mx-2'
            >
              <circle cx='12' cy='12' r='2.2' fill='#61DAFB' />
              <g stroke='#61DAFB' strokeWidth='1.4'>
                <ellipse cx='12' cy='12' rx='10' ry='4.2' />
                <ellipse
                  cx='12'
                  cy='12'
                  rx='10'
                  ry='4.2'
                  transform='rotate(60 12 12)'
                />
                <ellipse
                  cx='12'
                  cy='12'
                  rx='10'
                  ry='4.2'
                  transform='rotate(120 12 12)'
                />
              </g>
            </svg>
            <h1 className='text-3xl font-bold text-sky-950'>
              Fin<span className='text-orange-400'>Sense</span>
            </h1>
          </div>
          <p className='text-gray-500 text-sm mb-4'>
            Masukkan email Anda, kami akan kirimkan link reset password.
          </p>
          <form onSubmit={handleSubmit} className='w-full'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 transition-colors'
              required
            />
            {message && (
              <p className='text-green-500 text-sm mb-2'>{message}</p>
            )}
            {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-sky-950 text-white font-bold rounded-lg py-2 disabled:opacity-50 cursor-pointer'
            >
              {loading ? 'Mengirim...' : 'Kirim Link Reset'}
            </button>
          </form>
          <div className='mt-4 text-center'>
            <Link to='/login' className='text-orange-500 font-bold'>
              Kembali ke Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LupaPasswordPage;
