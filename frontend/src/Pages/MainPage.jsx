import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LuNotebookPen,
  LuCoins,
  LuPackageX,
  LuWallet,
  LuBoxes,
  LuCreditCard,
  LuLightbulb,
  LuMic,
  LuChevronDown,
} from 'react-icons/lu';

import hero from '../../images/herosection.png';
import dashboard from '../../images/dashboard.png';
import debt from '../../images/debt.png';
import aicashier from '../../images/aicashier.png';

const problems = [
  {
    icon: LuNotebookPen,
    title: 'Lupa catat penjualan',
    text: 'Transaksi kadang dicatat di buku dan sering hilang atau lupa dicatat sehingga rekap jadi tidak akurat.',
  },
  {
    icon: LuCoins,
    title: 'Hutang pelanggan tercecer',
    text: 'Catatan hutang rusak atau hilang, tanpa bon pelanggan sering lupa berapa hutang yang harus dibayar.',
  },
  {
    icon: LuPackageX,
    title: 'Stok habis tanpa sadar',
    text: 'Baru sadar barang kosong saat pembeli sudah menunggu, penjualan hilang begitu saja karena tidak tahu stok tersisa.',
  },
];

const smallFeatures = [
  {
    icon: LuWallet,
    title: 'Catatan Keuangan',
    text: 'Pemasukan dan pengeluaran tercatat otomatis dan menunjukkan untung rugi tiap hari tanpa ribet hitung manual.',
  },
  {
    icon: LuBoxes,
    title: 'Manajemen Stok',
    text: 'Stok berkurang otomatis setelah penjualan, kamu selalu tahu barang apa yang perlu direstok.',
  },
  {
    icon: LuCreditCard,
    title: 'Hutang Pelanggan',
    text: 'Pantau siapa saja pelanggan yang berutang, catat pelunasan, dan kirim pengingat lewat WhatsApp otomatis.',
  },
  {
    icon: LuLightbulb,
    title: 'Rekomendasi Restok',
    text: 'Dapat rekomendasi otomatis kapan harus restok dan berapa banyak berdasarkan tren penjualan.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Daftar akun',
    text: 'Isi nama toko dan email, langsung bisa mulai kelola bisnis tanpa ribet.',
  },
  {
    number: '2',
    title: 'Masukkan stok awal',
    text: 'Cukup masukkan barang yang kamu jual sekarang, tak perlu input rumit satu per satu.',
  },
  {
    number: '3',
    title: 'Jualan seperti biasa',
    text: 'FinSense mencatat semuanya otomatis sesuai transaksi harian tokomu.',
  },
];

const faqs = [
  {
    question: 'Apakah data penjualan saya aman?',
    answer: 'Ya. Semua data tersimpan di server terenkripsi dan otomatis dicadangkan setiap hari, jadi catatan penjualanmu tidak akan hilang.',
  },
  {
    question: 'Bisa dipakai tanpa internet?',
    answer: 'FinSense butuh koneksi internet untuk mencatat transaksi secara real-time, tapi tetap ringan digunakan lewat HP dengan kuota minim.',
  },
  {
    question: 'Perlu alat khusus?',
    answer: 'Tidak. Cukup gunakan HP atau laptop yang sudah kamu punya, tanpa perlu membeli mesin kasir atau alat tambahan.',
  },
  {
    question: 'Apakah gratis selamanya?',
    answer: 'FinSense bisa dipakai gratis untuk kebutuhan dasar. Untuk fitur lanjutan tersedia paket berbayar yang bisa kamu pilih sesuai kebutuhan toko.',
  },
  {
    question: 'Bagaimana kalau saya punya lebih dari satu toko?',
    answer: 'Tenang, kamu bisa menambahkan toko lain dan memantau semuanya dari satu akun FinSense yang sama.',
  },
];

function LogoMark() {
  return (
    <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900'>
      <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M3 3v18h18' />
        <path d='M18.5 8.5 13 14l-3-3-4.5 4.5' stroke='#F97316' />
      </svg>
    </div>
  );
}

function LandingSkeleton() {
  return (
    <div className='min-h-screen bg-white font-poppins'>
      <div className='h-20 border-b border-slate-200 px-5 sm:px-8'>
        <div className='mx-auto flex h-full max-w-7xl items-center justify-between'>
          <div className='h-8 w-32 animate-pulse rounded bg-slate-200' />
          <div className='hidden gap-8 md:flex'>
            <div className='h-4 w-14 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-20 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-12 animate-pulse rounded bg-slate-200' />
          </div>
          <div className='h-10 w-36 animate-pulse rounded-lg bg-slate-200' />
        </div>
      </div>
      <div className='px-5 py-16 sm:px-8 md:py-24'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-4'>
            <div className='h-10 w-full max-w-md animate-pulse rounded bg-slate-200' />
            <div className='h-10 w-3/4 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-full max-w-lg animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-2/3 max-w-lg animate-pulse rounded bg-slate-200' />
            <div className='h-12 w-44 animate-pulse rounded-lg bg-slate-200' />
          </div>
          <div className='aspect-video w-full animate-pulse rounded-2xl bg-slate-200' />
        </div>
      </div>
      <div className='bg-sky-950 px-5 py-20 sm:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto h-8 w-full max-w-md animate-pulse rounded bg-white/10' />
          <div className='mx-auto mt-4 h-4 w-full max-w-sm animate-pulse rounded bg-white/10' />
          <div className='mt-14 grid gap-6 sm:grid-cols-3'>
            <div className='h-48 animate-pulse rounded-2xl bg-white/10' />
            <div className='h-48 animate-pulse rounded-2xl bg-white/10' />
            <div className='h-48 animate-pulse rounded-2xl bg-white/10' />
          </div>
        </div>
      </div>
      <div className='bg-slate-50 px-5 py-20 sm:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto h-8 w-full max-w-md animate-pulse rounded bg-slate-200' />
          <div className='mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]'>
            <div className='h-80 animate-pulse rounded-2xl bg-slate-200' />
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='h-36 animate-pulse rounded-2xl bg-slate-200' />
              <div className='h-36 animate-pulse rounded-2xl bg-slate-200' />
              <div className='h-36 animate-pulse rounded-2xl bg-slate-200' />
              <div className='h-36 animate-pulse rounded-2xl bg-slate-200' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-sky-950 px-5 py-20 sm:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto h-8 w-full max-w-sm animate-pulse rounded bg-white/10' />
          <div className='mt-14 grid gap-8 sm:grid-cols-3'>
            <div className='h-28 animate-pulse rounded-2xl bg-white/10' />
            <div className='h-28 animate-pulse rounded-2xl bg-white/10' />
            <div className='h-28 animate-pulse rounded-2xl bg-white/10' />
          </div>
        </div>
      </div>
      <div className='bg-slate-50 px-5 py-20 sm:px-8'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
          <div className='space-y-3'>
            <div className='h-6 w-40 animate-pulse rounded bg-slate-200' />
            <div className='h-8 w-64 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-full animate-pulse rounded bg-slate-200' />
          </div>
          <div className='aspect-video w-full animate-pulse rounded-2xl bg-slate-200' />
        </div>
      </div>
      <div className='bg-white px-5 py-20 sm:px-8'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
          <div className='aspect-video w-full animate-pulse rounded-2xl bg-slate-200' />
          <div className='space-y-3'>
            <div className='h-6 w-40 animate-pulse rounded bg-slate-200' />
            <div className='h-8 w-64 animate-pulse rounded bg-slate-200' />
            <div className='h-4 w-full animate-pulse rounded bg-slate-200' />
          </div>
        </div>
      </div>
      <div className='bg-slate-50 px-5 py-20 sm:px-8'>
        <div className='mx-auto max-w-3xl'>
          <div className='mx-auto h-8 w-full max-w-sm animate-pulse rounded bg-slate-200' />
          <div className='mt-10 space-y-3'>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className='h-14 animate-pulse rounded-2xl bg-slate-200' />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-slate-900 px-5 py-20 sm:px-8'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <div className='mx-auto h-8 w-full max-w-sm animate-pulse rounded bg-white/10' />
          <div className='mx-auto h-4 w-full max-w-md animate-pulse rounded bg-white/10' />
          <div className='mx-auto h-12 w-52 animate-pulse rounded-lg bg-white/10' />
        </div>
      </div>
      <div className='bg-slate-950 px-5 py-14 sm:px-8'>
        <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-4'>
          <div className='h-24 animate-pulse rounded bg-white/10' />
          <div className='h-24 animate-pulse rounded bg-white/10' />
          <div className='h-24 animate-pulse rounded bg-white/10' />
          <div className='h-24 animate-pulse rounded bg-white/10' />
        </div>
      </div>
    </div>
  );
}

function MainPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  const toggleFaq = (index) => setOpenFaq((prev) => (prev === index ? null : index));

  if (loading) return <LandingSkeleton />;

  return (
    <div className='min-h-screen bg-white font-poppins'>
      <nav className='sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8'>
          <div className='flex h-20 items-center justify-between'>
            <button onClick={() => scrollToSection('hero')} className='flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 md:text-2xl'>
              <LogoMark />
              Fin<span className='text-orange-500'>Sense</span>
            </button>
            <div className='hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex'>
              <button onClick={() => scrollToSection('fitur')} className='transition-colors hover:text-orange-500'>Fitur</button>
              <button onClick={() => scrollToSection('cara-kerja')} className='transition-colors hover:text-orange-500'>Cara Kerja</button>
              <button onClick={() => scrollToSection('faq')} className='transition-colors hover:text-orange-500'>FAQ</button>
            </div>
            <div className='flex items-center gap-2 text-sm font-semibold sm:gap-4'>
              <button onClick={() => navigate('/login')} className='px-2 py-2 text-slate-600 transition-colors hover:text-slate-900 sm:px-3'>Masuk</button>
              <button onClick={() => navigate('/register')} className='rounded-lg bg-orange-500 px-4 py-2.5 text-white shadow-[0_8px_24px_rgba(249,115,22,0.25)] transition hover:bg-orange-600 sm:px-5'>Daftar Sekarang</button>
            </div>
          </div>
          <div className='flex justify-center gap-5 border-t border-slate-200 py-3 text-xs font-medium text-slate-600 md:hidden'>
            <button onClick={() => scrollToSection('fitur')}>Fitur</button>
            <button onClick={() => scrollToSection('cara-kerja')}>Cara Kerja</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id='hero' className='relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-white px-5 py-16 sm:px-8 md:py-24 lg:py-28'>
          <div className='relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2'>
            <div className='text-center lg:text-left'>
              <h1 className='text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'>
                Catat penjualan cukup dengan <span className='text-orange-500'>ngomong.</span>
              </h1>
              <p className='mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0'>
                FinSense mengurus kasir, stok, hutang pelanggan, dan laporan keuangan warung kamu dalam satu aplikasi tanpa ribet manual.
              </p>
              <div className='mt-8 flex justify-center lg:justify-start'>
                <button
                  onClick={() => navigate('/register')}
                  className='rounded-lg bg-orange-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-600'
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute -inset-6 rounded-3xl bg-orange-500/10 blur-3xl' />
              <div className='relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl'>
                <div className='flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3'>
                  <span className='h-2.5 w-2.5 rounded-full bg-red-400' />
                  <span className='h-2.5 w-2.5 rounded-full bg-yellow-400' />
                  <span className='h-2.5 w-2.5 rounded-full bg-green-400' />
                </div>
                <img src={hero} alt='Tampilan kasir FinSense' className='w-full object-cover' />
                <div className='absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl rounded-bl-sm border border-slate-100 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-lg'>
                  <LuMic className='h-3.5 w-3.5 text-orange-500' /> &quot;Jual Mie Goreng 3 bungkus&quot;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section id='masalah' className='relative overflow-hidden bg-sky-950 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.12),transparent_40%)] px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Masalah yang tiap hari dialami pemilik warung</h2>
              <p className='mt-4 text-base leading-7 text-slate-300'>Banyak hal kecil di warung yang bikin pusing dari hari ke hari.</p>
            </div>
            <div className='mt-14 grid gap-6 sm:grid-cols-3'>
              {problems.map((problem) => {
                const Icon = problem.icon;
                return (
                  <div key={problem.title} className='rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/10'>
                    <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400'>
                      <Icon className='h-6 w-6' />
                    </div>
                    <h3 className='text-lg font-bold text-white'>{problem.title}</h3>
                    <p className='mt-3 text-sm leading-6 text-slate-300'>{problem.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id='fitur' className='bg-slate-50 px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>Satu aplikasi untuk semua urusan warung</h2>
              <p className='mt-4 text-base leading-7 text-slate-600'>Pilih yang paling dibutuhkan, mudah digunakan siapa saja, bahkan tanpa keahlian komputer.</p>
            </div>
            <div className='mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]'>
              <div className='relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white'>
                <span className='inline-block rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-400'>Penjualan Otomatis</span>
                <h3 className='mt-4 text-2xl font-bold'>POS Suara</h3>
                <p className='mt-3 max-w-sm text-sm leading-6 text-slate-300'>Cukup sebutkan nama barang dan jumlahnya. Transaksi langsung tercatat otomatis tanpa ketik satu pun.</p>
                <div className='mt-6 overflow-hidden rounded-xl border border-white/10'>
                  <img src={aicashier} alt='POS Suara FinSense' className='w-full object-cover' />
                </div>
                <div className='mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white'>
                  <LuMic className='h-4 w-4' /> Mendengarkan...
                </div>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                {smallFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className='rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg'>
                      <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600'>
                        <Icon className='h-5 w-5' />
                      </div>
                      <h3 className='text-base font-bold text-slate-900'>{feature.title}</h3>
                      <p className='mt-2 text-sm leading-6 text-slate-600'>{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section id='cara-kerja' className='relative overflow-hidden bg-sky-950 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.12),transparent_40%)] px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Mulai dalam 5 menit</h2>
              <p className='mt-4 text-base leading-7 text-slate-300'>Tanpa ribet, tanpa instalasi hardware, atau kursus rumit.</p>
            </div>
            <div className='mt-14 grid gap-8 text-left sm:grid-cols-3'>
              {steps.map((step) => (
                <div key={step.number}>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white'>{step.number}</div>
                  <h3 className='mt-5 text-lg font-bold text-white'>{step.title}</h3>
                  <p className='mt-2 text-sm leading-6 text-slate-300'>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlight #1 */}
        <section className='bg-slate-50 px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
            <div>
              <span className='inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600'>Kontrol Keuangan</span>
              <h3 className='mt-4 text-2xl font-bold text-slate-900 sm:text-3xl'>Lihat untung rugi hari ini</h3>
              <p className='mt-4 leading-7 text-slate-600'>Pantau jumlah keuntungan, kerugian, dan grafik produk terlaris secara real-time dari HP atau laptop kamu kapan pun.</p>
              <blockquote className='mt-6 border-l-4 border-orange-500 pl-4 text-sm italic text-slate-500'>&quot;Sekarang saya bisa lihat untung rugi setiap hari lewat HP.&quot;</blockquote>
            </div>
            <div className='rounded-2xl border border-slate-200 bg-white p-2 shadow-xl'>
              <img src={dashboard} alt='Dasbor keuangan FinSense' className='w-full rounded-xl object-cover' />
            </div>
          </div>
        </section>

        {/* Feature highlight #2 */}
        <section className='bg-white px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2'>
            <div className='rounded-2xl border border-slate-200 bg-white p-2 shadow-xl md:order-first'>
              <img src={debt} alt='Rekap hutang pelanggan FinSense' className='w-full rounded-xl object-cover' />
            </div>
            <div>
              <span className='inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600'>Tutup Hutang</span>
              <h3 className='mt-4 text-2xl font-bold text-slate-900 sm:text-3xl'>Tidak ada lagi hutang yang terlupa</h3>
              <p className='mt-4 leading-7 text-slate-600'>Rekap hutang pelanggan tercatat rapi lengkap dengan tanggal jatuh tempo, supaya arus kas warungmu tetap terjaga.</p>
              <blockquote className='mt-6 border-l-4 border-orange-500 pl-4 text-sm italic text-slate-500'>&quot;Sekarang saya bisa ingatkan pelanggan otomatis sebelum jatuh tempo.&quot;</blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id='faq' className='bg-slate-50 px-5 py-20 sm:px-8 md:py-24'>
          <div className='mx-auto max-w-3xl'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>Pertanyaan yang sering ditanyakan</h2>
              <p className='mt-4 text-base leading-7 text-slate-600'>Segala hal yang perlu kamu ketahui seputar FinSense.</p>
            </div>
            <div className='mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white'>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className='flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-slate-900'
                    >
                      <span>{faq.question}</span>
                      <LuChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className='overflow-hidden'>
                        <p className='px-6 pb-5 text-sm leading-6 text-slate-600'>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='bg-slate-900 px-5 py-20 text-center sm:px-8 md:py-24'>
          <div className='mx-auto max-w-3xl'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl'>Rapikan pembukuan warung kamu mulai hari ini.</h2>
            <p className='mt-4 text-base leading-7 text-slate-300'>Bergabunglah dengan ribuan pemilik warung pintar di seluruh Indonesia yang hemat waktu dan untung lebih banyak.</p>
            <button
              onClick={() => navigate('/register')}
              className='mt-8 inline-block rounded-lg bg-orange-500 px-8 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600'
            >
              Mulai Gratis Sekarang
            </button>
          </div>
        </section>
      </main>

      <footer className='bg-slate-950 px-5 py-14 text-slate-400 sm:px-8'>
        <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]'>
          <div>
            <div className='flex items-center gap-2 text-xl font-bold text-white'>
              <LogoMark />
              Fin<span className='text-orange-500'>Sense</span>
            </div>
            <p className='mt-3 max-w-xs text-sm leading-6'>POS Kasir Suara untuk pemilik warung dan UMKM di Indonesia.</p>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wide text-white'>Produk</h4>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>Kasir POS</li>
              <li>Catatan Keuangan</li>
              <li>Manajemen Stok</li>
              <li>Catatan Hutang</li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wide text-white'>Dukungan</h4>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>Pusat Bantuan</li>
              <li>Panduan Pengguna</li>
              <li>Kontak WhatsApp</li>
            </ul>
          </div>
          <div>
            <h4 className='text-xs font-bold uppercase tracking-wide text-white'>Perusahaan</h4>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>Tentang Kami</li>
              <li>Blog</li>
              <li>Karir</li>
            </ul>
          </div>
        </div>
        <div className='mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs'>
          &copy; {new Date().getFullYear()} FinSense. Dibuat untuk pengusaha UMKM Indonesia.
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
