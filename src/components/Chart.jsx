import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


export function Chart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js line Chart',
      },
    },
  };

  const labels = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const data = {
    labels,
    datasets: [
      {
        label: 'abc',
        data: [14,5,20, 25, 35, 12, 26],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  }
  return (
    <div className='h-[400px] w-4/5 mb-7 flex flex-col justify-center mx-auto col-start-1 col-span-2'>
      <h2>Previsão para os próximos dias</h2>
      <Line height={150} options={options} data={data} />
    </div>
  )
}