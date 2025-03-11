import { faker } from '@faker-js/faker';
import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo, useState } from 'react';
import { Line as BaseLine } from 'react-chartjs-2';

const LABELS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const DATA = {
    labels: LABELS,
    datasets: [
        {
            label: 'Dataset 1',
            data: LABELS.map(() => faker.number.int()),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: LABELS.map(() => faker.number.int()),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

const DATA_NEW = {
    labels: LABELS,
    datasets: [
        {
            label: 'Dataset 1',
            data: LABELS.map(() => faker.number.int()),
            borderColor: 'rgb(255, 209, 73)',
            backgroundColor: 'rgba(255, 235, 119, 0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data: LABELS.map(() => faker.number.int()),
            borderColor: 'rgb(255, 128, 0)',
            backgroundColor: 'rgba(255, 131, 37, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OPTIONS: ChartOptions<any> = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Сравнительные кривые',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const MAP_YEAR_TO_DATA: Record<number, ChartData<'line'>> = {
    2023: DATA,
    2024: DATA_NEW,
};

export const Line: FC = memo(() => {
    const [year, setYear] = useState<number>(2023);
    
        return (
            <div className="chart">
                <select onChange={(e) => setYear(Number(e.target.value))}>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                </select>
                <div className="container">
                    <BaseLine height={250} data={MAP_YEAR_TO_DATA[year]} options={OPTIONS} width={250} />
                </div>
            </div>
        );
});
