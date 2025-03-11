import { faker } from '@faker-js/faker';
import { ChartData } from 'chart.js';
import { FC, memo, useState } from 'react';
import { Bar as BaseBar } from 'react-chartjs-2';

const LABELS = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const DATA = {
    labels: LABELS,
    datasets: [
        {
            label: 'Dataset 1',
            data: LABELS.map(() => faker.number.int({ min: 0, max: 2500 })),
            backgroundColor: 'rgba(254, 223, 64, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: LABELS.map(() => faker.number.int({ min: 0, max: 2500 })),
            backgroundColor: 'rgba(254, 162, 64, 0.5)',
        },
    ],
};

const DATA_NEW = {
    labels: LABELS,
    datasets: [
        {
            label: 'Dataset 1',
            data: LABELS.map(() => faker.number.int({ min: 0, max: 2500 })),
            backgroundColor: 'rgba(254, 223, 64, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: LABELS.map(() => faker.number.int({ min: 0, max: 2500 })),
            backgroundColor: 'rgba(254, 162, 64, 0.5)',
        },
    ],
};

const OPTIONS = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Вертикальные столбцы',
        },
    },
};

const MAP_YEAR_TO_DATA: Record<number, ChartData<'bar'>> = {
    2023: DATA,
    2024: DATA_NEW,
};


export const Bar: FC = memo(() => {
    const [year, setYear] = useState<number>(2023);
    
    return (
        <div className="chart">
            <select onChange={(e) => setYear(Number(e.target.value))}>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
            </select>
            <div className="container">
                <BaseBar height={250} data={MAP_YEAR_TO_DATA[year]} options={OPTIONS} />
            </div>
        </div>
    );
});
