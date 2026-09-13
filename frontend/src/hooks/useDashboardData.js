import { useState, useEffect } from 'react';
import { getTransactions } from '../services/transactionService';
import api from '../services/api';

// ============================================================
// HOOK UTAMA DASHBOARD
// - Statistik hari ini (pemasukan & jumlah transaksi)
// - Data grafik penjualan 7 hari terakhir
// - Prediksi pemasukan besok (AI)
// ============================================================
export const useDashboardData = () => {
  const [todayIncome, setTodayIncome] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [averageOrder, setAverageOrder] = useState(0);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({ dates: [], amounts: [] });
  const [revenuePrediction, setRevenuePrediction] = useState(null);
  const [predictionMessage, setPredictionMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
        const endOfDay = new Date(
          today.setHours(23, 59, 59, 999),
        ).toISOString();

        // 1. Transaksi hari ini
        const todayRes = await getTransactions({
          startDate: startOfDay,
          endDate: endOfDay,
        });
        const todayIncomes = todayRes.data.filter((t) => t.type === 'income');
        const totalIncome = todayIncomes.reduce((s, t) => s + t.amount, 0);
        setTodayIncome(totalIncome);
        setTodayCount(todayIncomes.length);
        setAverageOrder(
          todayIncomes.length ? totalIncome / todayIncomes.length : 0,
        );

        // 2. Grafik 7 hari
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const weeklyRes = await getTransactions({
          startDate: sevenDaysAgo.toISOString(),
          endDate: endOfDay,
        });
        const weeklyIncomes = weeklyRes.data.filter((t) => t.type === 'income');
        const dailyMap = new Map();
        weeklyIncomes.forEach((t) => {
          const date = t.transaction_date.split('T')[0];
          dailyMap.set(date, (dailyMap.get(date) || 0) + t.amount);
        });
        const sortedDates = Array.from(dailyMap.keys()).sort();
        const amounts = sortedDates.map((d) => dailyMap.get(d));
        setChartData({ dates: sortedDates, amounts });

        // 3. Prediksi Revenue AI (dengan validasi kewajaran)
        try {
          const revRes = await api.get('/ai/predict-revenue');
          if (revRes.data.available === false) {
            setPredictionMessage(
              revRes.data.message || 'Data transaksi belum cukup',
            );
            setRevenuePrediction(null);
          } else {
            const rawValue = revRes.data.predicted_revenue;
            // Jika null/undefined atau nilai tidak masuk akal (<=0) -> tampilkan placeholder
            const displayValue =
              rawValue === null || rawValue === undefined || rawValue <= 0
                ? '......'
                : rawValue;
            setRevenuePrediction({
              predicted_revenue: displayValue,
              prediction_date:
                revRes.data.prediction_date ||
                new Date().toISOString().split('T')[0],
            });
            setPredictionMessage(revRes.data.note || '');
          }
        } catch (err) {
          console.error('Revenue prediction error:', err);
          setRevenuePrediction(null);
          setPredictionMessage('Gagal memuat prediksi pendapatan');
        }
      } catch (err) {
        console.error('Dashboard error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    todayIncome,
    todayCount,
    averageOrder,
    chartData,
    loading,
    revenuePrediction,
    predictionMessage,
  };
};
