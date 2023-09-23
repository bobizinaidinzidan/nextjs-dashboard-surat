'use client';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  //   SubTitle,
} from 'chart.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function PieChart({ dataStatus }) {
  // dataStatus.forEach((statusSurat) => {
  //   console.log(`Status: ${statusSurat.nama}`);
  //   console.log(`Jumlah Surat Masuk: ${statusSurat.suratmasuks.length}`);
  // });
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: dataStatus.map((data) => data.nama),
      datasets: [
        {
          label: 'Jumlah Surat',
          data: dataStatus.map((data) => data.suratmasuks.length),
          borderColor: ['#C0C0C0', '#C0C0C0', '#C0C0C0'],
          backgroundColor: ['#32a431', '#f7b500', '#bb1e10'],
          borderWidth: 2,
        },
      ],
    });
    setChartOptions({
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          display: false, // Hide x-axis
        },
        y: {
          display: false, // Hide y-axis
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Status Surat Masuk',
        },
      },
    });
  });
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[60vh] h-[50vh] m-auto p-2 border rounded-lg bg-white text-center'>
        <Pie
          data={chartData}
          options={chartOptions}
          style={{ display: 'inline-block' }}
        />
      </div>
    </>
  );
}
