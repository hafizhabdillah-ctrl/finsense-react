import { useNavigate } from 'react-router-dom';

import hero from '../../images/herosection.png';
import dashboard from '../../images/dashboard.png';
import stock from '../../images/stock.png';
import cashier from '../../images/cashier.png';
import debt from '../../images/debt.png';
import log from '../../images/log.png';
import aicashier from '../../images/aicashier.png';
import chat from '../../images/chat.png';

const features = [
  { title: 'Dasbor Utama', image: dashboard, alt: 'Dashboard', text: 'Pantau kesehatan bisnis, tren pendapatan, dan metrik operasional harian dalam satu tampilan.' },
  { title: 'Stok Barang', image: stock, alt: 'Stock', text: 'Dapatkan peringatan stok rendah dan kelola inventaris secara real-time tanpa tebakan.' },
  { title: 'Kasir Otomatis', image: cashier, alt: 'Cashier', text: 'Proses transaksi lebih cepat, akurat, dan nyaman untuk setiap pelanggan.' },
  { title: 'Pantau Hutang', image: debt, alt: 'Debt', text: 'Jaga arus kas tetap sehat dengan pelacakan faktur yang belum dibayar.' },
  { title: 'Log Inventaris', image: log, alt: 'Log', text: 'Lacak barang masuk dan keluar dengan riwayat yang siap membantu audit.' },
];

function MainPage() {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className='min-h-screen bg-black font-poppins text-slate-100'>
      <nav className='sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <button onClick={() => scrollToSection('produk')} className='flex items-center text-xl font-bold tracking-tight md:text-2xl'>
              <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' className='h-9 w-auto'>
                <circle cx='12' cy='12' r='2.2' fill='#61DAFB' />
                <g stroke='#61DAFB' strokeWidth='1.4'>
                  <ellipse cx='12' cy='12' rx='10' ry='4.2' />
                  <ellipse cx='12' cy='12' rx='10' ry='4.2' transform='rotate(60 12 12)' />
                  <ellipse cx='12' cy='12' rx='10' ry='4.2' transform='rotate(120 12 12)' />
                </g>
              </svg>
              Fin<span className='text-orange-500'>Sense</span>
            </button>
            <div className='hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex'>
              <button onClick={() => scrollToSection('produk')} className='transition-colors hover:text-orange-500'>Produk</button>
              <button onClick={() => scrollToSection('fitur')} className='transition-colors hover:text-orange-500'>Fitur</button>
              <button onClick={() => scrollToSection('wawasan')} className='transition-colors hover:text-orange-500'>Wawasan AI</button>
            </div>
            <div className='flex items-center gap-2 text-sm font-semibold sm:gap-4'>
              <button onClick={() => navigate('/login')} className='px-2 py-2 text-slate-300 transition-colors hover:text-white sm:px-3'>Masuk</button>
              <button onClick={() => navigate('/register')} className='rounded-lg bg-orange-500 px-4 py-2.5 text-black shadow-[0_8px_24px_rgba(249,115,22,0.25)] transition hover:bg-orange-400 sm:px-5'>Daftar</button>
            </div>
          </div>
          <div className='flex justify-center gap-5 border-t border-white/10 py-3 text-xs font-medium text-slate-300 md:hidden'>
            <button onClick={() => scrollToSection('produk')}>Produk</button>
            <button onClick={() => scrollToSection('fitur')}>Fitur</button>
            <button onClick={() => scrollToSection('wawasan')}>Wawasan AI</button>
          </div>
        </div>
      </nav>

      <main>
        <section id='produk' className='relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_32%),linear-gradient(135deg,#000000_0%,#1a1a1a_55%,#171717_100%)] px-5 py-16 sm:px-8 md:py-24 lg:py-28'>
          <div className='relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='animate-fade-in-up text-center lg:text-left'>
              <p className='mb-5 text-xs font-bold uppercase tracking-[0.25em] text-orange-500'>Platform bisnis UMKM</p>
              <h1 className='max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl'>Cerdas mengelola bisnis, <span className='text-orange-500'>siap bertumbuh.</span></h1>
              <p className='mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg'>Kendalikan penjualan, stok, dan keuangan dengan wawasan AI yang bekerja untuk membantu Anda mengambil keputusan lebih cepat.</p>
              <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start'>
                <button onClick={() => navigate('/register')} className='rounded-lg bg-orange-500 px-6 py-3 font-bold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-400'>Mulai Sekarang <span aria-hidden='true'>-&gt;</span></button>
                <button onClick={() => scrollToSection('fitur')} className='rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500'>Lihat Fitur</button>
              </div>
              <div className='mt-10 flex justify-center gap-8 text-left text-xs text-slate-400 lg:justify-start'>
                <span><strong className='block text-lg text-white'>5+</strong>modul bisnis</span>
                <span><strong className='block text-lg text-white'>24/7</strong>dukungan AI</span>
                <span><strong className='block text-lg text-white'>1</strong>platform terpadu</span>
              </div>
            </div>
            <div className='relative animate-fade-in-up-delay'>
              <div className='absolute -inset-5 rounded-3xl bg-orange-500/10 blur-3xl' />
              <div className='relative rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm sm:p-3'>
                <img src={hero} alt='Tampilan platform FinSense' className='w-full rounded-xl object-cover' />
              </div>
            </div>
          </div>
        </section>

        <section id='fitur' className='bg-neutral-900 px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end'>
              <div><p className='mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500'>Satu ekosistem</p><h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Semua yang bisnis Anda butuhkan.</h2></div>
              <p className='max-w-sm text-sm leading-7 text-slate-400'>Dari transaksi pertama hingga keputusan strategis, FinSense membantu Anda tetap memegang kendali.</p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
              {features.map((feature, index) => (
                <article key={feature.title} className={`group flex flex-col border border-white/10 bg-neutral-800 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-neutral-700 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className='mb-5 flex items-center justify-between'><span className='text-xs font-bold text-orange-500'>0{index + 1}</span><span className='h-px w-10 bg-orange-500/30' /></div>
                  <h3 className='text-lg font-bold text-white'>{feature.title}</h3>
                  <img src={feature.image} alt={feature.alt} className='my-6 h-28 w-full object-contain mix-blend-screen transition duration-300 group-hover:scale-105' />
                  <p className='mt-auto text-sm leading-6 text-slate-400'>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='wawasan' className='bg-black px-5 py-20 sm:px-8 md:py-28'>
          <div className='mx-auto max-w-7xl'>
            <div className='mb-16 max-w-2xl'><p className='mb-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-500'>Bekerja lebih cerdas</p><h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>AI yang memahami ritme bisnis Anda.</h2></div>
            <div className='grid items-center gap-10 border-t border-white/10 py-12 md:grid-cols-2 md:gap-20'>
              <div><h3 className='text-2xl font-bold text-white sm:text-3xl'>Operasional lebih cerdas dengan suara</h3><p className='mt-5 leading-8 text-slate-400'>Percepat alur kerja dengan kasir pengenal suara. Tambah barang, cek harga, atau cetak struk seketika tanpa mengganggu ritme pelayanan.</p></div>
              <img src={aicashier} alt='Kasir dengan dukungan AI suara' className='w-full border border-white/15 object-cover shadow-2xl' />
            </div>
            <div className='grid items-center gap-10 border-t border-white/10 py-12 md:grid-cols-2 md:gap-20'>
              <img src={chat} alt='Tampilan AI chat FinSense' className='w-full border border-white/15 object-cover shadow-2xl md:order-first' />
              <div><h3 className='text-2xl font-bold text-white sm:text-3xl'>Wawasan AI, kapan pun dibutuhkan</h3><p className='mt-5 leading-8 text-slate-400'>Tanyakan apa saja tentang data bisnis Anda. AI Live membantu membaca pola, memberi solusi real-time, dan menyusun langkah strategis.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-white/10 bg-black px-5 py-7 text-center text-sm text-slate-400 sm:px-8'>
        <p><span className='font-bold text-white'>Fin<span className='text-orange-500'>Sense</span></span> &copy; {new Date().getFullYear()} - Coding Camp 2026</p>
      </footer>
    </div>
  );
}

export default MainPage;
