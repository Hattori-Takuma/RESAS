import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

export const Chart = () => {
  useEffect(() => {
    createChart();
  }, []);

  const createChart = () => {
    Highcharts.chart('chart-container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Sample Chart'
      },
      xAxis: {
        categories: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        name: 'Series 1',
        data: [1, 2, 3, 4, 5]
      }]
    });
  }

  return (
    <div id="chart-container">

    </div>
  )
}
