import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const RewardChart = ({ rewardPointsData }) => {
    const [chartKey, setChartKey] = useState(0);
    useEffect(() => {
        // Update the chart key to trigger re-render when rewardPointsData changes
        setChartKey(chartKey + 1);
      }, [rewardPointsData]);
  // Extract labels and data from rewardPointsData
  const labels = rewardPointsData.map((dataPoint) => dataPoint.date);
  const data = rewardPointsData.map((dataPoint) => dataPoint.points);

  // Chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Reward Points Over Time',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Chart options configuration
  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Reward Points',
        },
      },
    },
  };

  return <Line key={chartKey} data={chartData} options={chartOptions} />;
};

export default RewardChart;
