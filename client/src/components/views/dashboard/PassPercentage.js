import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: 'Pass/fail %',
      data: [15, 85],
      backgroundColor: [
        'rgba(255,0,51,0.3)',
        'rgba(45,255,0,0.36)',
      ],
      borderColor: [
        'rgb(255,2,56)',
        'rgba(17,255,0,0.96)'
      ],
      hoverBackgroundColor: [
        'rgb(255,2,56)',
        'rgba(17,255,0,0.96)'
      ],
      borderWidth: 1,
      cutout: '70%',
      animation: {
        animateRotate: true
      }
    },
  ]
};

export function PassPercentage() {
  return (
    <Doughnut className="percentage" data={data} />
  )
}
