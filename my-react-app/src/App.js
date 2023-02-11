import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Store } from '../src/store/index';
import { PREFECTURES, POPULATIONS } from '../src/action/index';
// eslint-disable-next-line
import { fetchPrefecture } from '../src/functions/resas';





function App() {


  const { globalState, setGlobalState } = useContext(Store);
  // eslint-disable-next-line
  const [prefectures, setPrefectures] = useState([])
  // eslint-disable-next-line
  const [populations, setPopulations] = useState([])




  useEffect(() => {
    // (async () => {
    //   await fetchPrefecture(res => {
    //     console.log(res.data)
    //     setGlobalState({
    //       type: PREFECTURES,
    //       data: res.data
    //     })
    //     setPrefectures(res.data)
    //   })
    // })()

    fetchData()


  }, [])



  const fetchData = async () => {
    const res = await fetchPrefecture()
    console.log(res.result, "res の中身を確認")
    setGlobalState({
      type: PREFECTURES,
      data: res.result
    })
  }
  console.log(globalState, "global state check")

  // export const fetchPrefecture = async () => {
  //   const res = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
  //     headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
  //   })
  //   return res.data
  // }

  return (
    <>
      <h1>
        hello
    </h1>
      <tr>
        <th>都道府県</th>
      </tr>

      <ul>
        {globalState.result_data.map((data, index) => (
          <li key={index}>
            {data.prefCode}
            {data.prefName}
          </li>
        ))}
      </ul>
    </>

  );
}

export default App;
