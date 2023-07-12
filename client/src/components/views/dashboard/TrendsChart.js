import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    Chart,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

Chart.defaults.color = '#fff';
Chart.defaults.aspectRatio = 592 / 308;
export const options = {
    color: '#fff',
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            position: 'top',
            display: true,
            text: 'Testing Trends',
            font: {
                size: '25px',
                weight: 'normal',
            },
            align: 'start',
        },
        subtitle: {
            display: true,
            position: 'top',
            text: 'Testing trends across existing test runs',
            color: '#fff',
            font: {
                size: 12,
                family: 'tahoma',
                weight: 'normal',
                style: 'italic',
            },
            padding: {
                bottom: 10,
            },
        },
    },
};

const labels = ['Run 1', 'Run 2', 'Run 3', 'Run 4', 'Run 5', 'Run 6'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Pass',
            data: [0, 2, 4, 6, 8, 10],
            borderColor: 'rgb(17,255,0,0.96)',
            backgroundColor: 'rgba(45,255,0,0.36)',
        },
        {
            fill: true,
            label: 'Fail',
            data: [10, 8, 6, 4, 2, 0],
            borderColor: 'rgb(255,2,56)',
            backgroundColor: 'rgba(255,0,51,0.3)',
        },
    ],
};

export function TrendsChart() {
    return <Line options={options} data={data} />;
}
