import React from 'react';
import LoginInput from '../../Components/Auth/Login/LoginInput.jsx';

function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-black p-4'>
      {/* Login Card */}
      <div className='bg-neutral-900 rounded-2xl shadow-xl w-full max-w-md border border-white/10 p-6 sm:p-8'>
        <div className='flex flex-col items-center'>
          {/* Logo and Name */}
          <div className='flex flex-row items-center'>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-10 w-10 sm:h-12 sm:w-12 mx-2'
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
            <h1 className='text-2xl sm:text-3xl font-bold text-white'>
              Fin<span className='text-orange-500'>Sense</span>
            </h1>
          </div>
          <p className='mt-1 mb-6 text-xs font-bold uppercase tracking-[0.25em] text-orange-500'>
            Manajemen UMKM
          </p>

          <h2 className='text-xl sm:text-2xl font-bold text-white mb-2 text-center'>
            Selamat datang
          </h2>
          <p className='text-slate-400 text-sm sm:text-base mb-6 text-center'>
            Masuk ke dashboard manajemen bisnis Anda.
          </p>

          <div className='w-full'>
            <LoginInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
