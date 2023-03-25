import React, { useEffect, useReducer, useState } from 'react';
import Highcharts from 'highcharts';
import { POPULATIONS } from '../action/';
import reducer from '../reducers/index';

export const Chart = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [year, setYear] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    createChart();

    dispatch({
      type: POPULATIONS,
      year,
      value,
    });

    setYear('');
    setValue('');
  }, []);




  const createChart = () => {

    Highcharts.chart('chart-container', {
      chart: {
        type: 'line'
      },
      title: {
        text: '総人口推移'
      },
      xAxis: {
        categories: [year]
      },
      yAxis: {
        title: {
          text: '人口'
        }
      },
      series: [{
        name: '都道府県名',

        data: [value]
      }]
    });

  }

  return (
    <div id="chart-container">

    </div>
  )
}
