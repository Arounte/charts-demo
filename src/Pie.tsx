import { faker } from '@faker-js/faker';
import { ChartData, ChartOptions } from 'chart.js';
import { FC, memo, useState } from 'react';
import { Pie as BasePie } from 'react-chartjs-2';

const LABELS = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

const DATA = {
    labels: LABELS,
    datasets: [
        {
            label: '# of Votes',
            data: LABELS.map(() => faker.number.int({ min: 5, max: 50 })),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
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
            text: 'Пирог',
        },
    },
};

const DATA_NEW = {
    labels: LABELS,
    datasets: [
        {
            label: 'Number of Votes',
            data: LABELS.map(() => faker.number.int({ min: 50, max: 150 })),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const MAP_YEAR_TO_DATA: Record<number, ChartData<'pie'>> = {
    2023: DATA,
    2024: DATA_NEW,
};

export const Pie: FC = memo(() => {
    const [year, setYear] = useState(2023);

    return (
        <div className="chart">
            <select onChange={(e) => setYear(Number(e.target.value))}>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
            </select>
            <div className="container">
                <BasePie height={250} data={MAP_YEAR_TO_DATA[year]} options={OPTIONS} />
            </div>
        </div>
    );
});
