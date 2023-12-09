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
import { DataChart } from '../datachart/DataChart';
import { useEffect } from 'react';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ suratMasuk, suratKeluar }) {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});
  let arrayBulan = {
    suratmasuk: {
      januari: [],
      februari: [],
      maret: [],
      april: [],
      mei: [],
      juni: [],
      juli: [],
      agustus: [],
      september: [],
      oktober: [],
      november: [],
      desember: [],
    },
    suratkeluar: {
      januari: [],
      februari: [],
      maret: [],
      april: [],
      mei: [],
      juni: [],
      juli: [],
      agustus: [],
      september: [],
      oktober: [],
      november: [],
      desember: [],
    },
  };
  for (let i = 0; i < suratMasuk.length; i++) {
    // console.log(suratMasuk);

    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Januari') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['januari'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Februari') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['februari'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Maret') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['maret'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'April') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['april'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Mei') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['mei'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Juni') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['juni'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Juli') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['juli'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Agustus') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['agustus'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'September') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['september'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Oktober') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['oktober'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'November') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['november'].push(suratMasuk[i]);
    }
    if (moment(suratMasuk[i].tglterima).format('MMMM') == 'Desember') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratmasuk']['desember'].push(suratMasuk[i]);
    }
  }
  for (let i = 0; i < suratKeluar.length; i++) {
    // console.log(suratKeluar);

    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Januari') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['januari'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Februari') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['februari'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Maret') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['maret'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'April') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['april'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Mei') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['mei'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Juni') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['juni'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Juli') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['juli'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Agustus') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['agustus'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'September') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['september'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Oktober') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['oktober'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'November') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['november'].push(suratKeluar[i]);
    }
    if (moment(suratKeluar[i].tglterima).format('MMMM') == 'Desember') {
      // Contoh kondisi: hanya menambahkan angka genap
      arrayBulan['suratkeluar']['desember'].push(suratKeluar[i]);
    }
  }
  // console.log(typeof 'Juni');
  useEffect(() => {
    setChartData({
      labels: DataChart.map((data) => data.year),
      datasets: [
        {
          label: 'Surat Masuk',
          data: [
            arrayBulan['suratmasuk']['januari'].length,
            arrayBulan['suratmasuk']['februari'].length,
            arrayBulan['suratmasuk']['maret'].length,
            arrayBulan['suratmasuk']['april'].length,
            arrayBulan['suratmasuk']['mei'].length,
            arrayBulan['suratmasuk']['juni'].length,
            arrayBulan['suratmasuk']['juli'].length,
            arrayBulan['suratmasuk']['agustus'].length,
            arrayBulan['suratmasuk']['september'].length,
            arrayBulan['suratmasuk']['oktober'].length,
            arrayBulan['suratmasuk']['november'].length,
            arrayBulan['suratmasuk']['desember'].length,
          ],
          borderColor: 'rgb(23,0,233)',
          backgroundColor: 'rgb(77,0,255)',
          borderWidth: 1,
          barPercentage: 1, // Adjust the bar width here (60% of available space)
        },
        {
          label: 'Surat Keluar',
          data: [
            arrayBulan['suratkeluar']['januari'].length,
            arrayBulan['suratkeluar']['februari'].length,
            arrayBulan['suratkeluar']['maret'].length,
            arrayBulan['suratkeluar']['april'].length,
            arrayBulan['suratkeluar']['mei'].length,
            arrayBulan['suratkeluar']['juni'].length,
            arrayBulan['suratkeluar']['juli'].length,
            arrayBulan['suratkeluar']['agustus'].length,
            arrayBulan['suratkeluar']['september'].length,
            arrayBulan['suratkeluar']['oktober'].length,
            arrayBulan['suratkeluar']['november'].length,
            arrayBulan['suratkeluar']['desember'].length,
          ],
          borderColor: 'rgb(220, 38, 38)',
          backgroundColor: 'rgb(255, 100, 100)',
          borderWidth: 1,
          barPercentage: 1, // Adjust the bar width here (60% of available space)
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: { position: 'bottom' },
        title: {
          display: true,
          text: 'Data Keseluruhan Surat Tahun 2023',
        },
        // footer: {
        //   footerColor: '#fff',
        //   footerAlign: 'left',
        //   fontSize: 10,
        //   labelString: 'Party size',
        // },
      },
      scales: {
        x: {
          beginAtZero: true,
          mode: 'fit',
        },
        y: {
          beginAtZero: true,
        },
      },
      maintainAspecRatio: false,
      responsive: true,
    });
  });
  return (
    <>
      <div className='overflow-x-scroll w-full md:col-span-2 relative lg:h-[65vh] h-[50vh] m-auto p-2 border rounded-lg bg-white text-center'>
        <Bar
          data={chartData}
          options={chartOptions}
          style={{ display: 'inline-block' }}
        />
      </div>
    </>
  );
}
