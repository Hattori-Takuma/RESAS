import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { POPULATIONS } from '../action/';
import reducer from '../reducers/index';
import { Store } from '../store';

export const Chart = () => {
  const [state, dispatch] = useReducer(reducer, []);
  // const [year, setYear] = useState('');
  // const [value, setValue] = useState('');
  const { globalState, setGlobalState } = useContext(Store);
  console.log('🚀 ~ file: Chart.js:12 ~ Chart ~ globalState:', globalState);



  const createOptions = () => {
    let years = []
    // let values = []
    let series = []
    let name = []

    if (globalState.show_pref_data !== undefined) {
      if (globalState.show_pref_data.length !== 0) {
        years = globalState.show_pref_data[0].data.map((d) => d.year);
        globalState.show_pref_data.forEach((spd) => {
          let tempData = {
            name: 'test',
            data: spd.data.map((d) => Number(d.value)),
          };
          series.push(tempData)
        })


      }
    }

    const options = {
      title: {
        text: '折れ線グラフ',
      },
      xAxis: {
        categories: years,
      },
      yAxis: {
        title: {
          text: '人口',
        },
      },
      series
    };

    return options
  }



  // const createChart = () => {
  //   Highcharts.chart('chart-container', {
  //     chart: {
  //       type: 'line',
  //     },
  //     title: {
  //       text: '総人口推移',
  //     },
  //     xAxis: {
  //       categories: [year],
  //     },
  //     yAxis: {
  //       title: {
  //         text: '人口',
  //       },
  //     },
  //     series: [
  //       {
  //         name: '都道府県名',

  //         data: [value],
  //       },
  //     ],
  //   });
  // };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={createOptions()} />

      <div id="chart-container"></div>
    </div>
  );
};