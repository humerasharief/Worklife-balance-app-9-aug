import React from 'react';
import { Bar } from 'react-chartjs-2';

const SimpleGraph = ({ completedCount, totalCount }) => {
  const data = {
    labels: ['Completed', 'Not Completed'],
    datasets: [
      {
        label: 'Item Status',
        backgroundColor: ['#36A2EB', '#FF6384'],
        data: [completedCount, totalCount - completedCount],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div>
      <h2>Simple Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SimpleGraph;
