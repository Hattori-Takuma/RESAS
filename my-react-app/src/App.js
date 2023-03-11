import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Store } from '../src/store/index';
import { PREFECTURES } from '../src/action/index';
// eslint-disable-next-line
import { fetchPrefecture, getDemographics } from '../src/functions/resas';
import { CheckBoxList } from '../src/Component/checkBox'



function App() {
  const { globalState, setGlobalState } = useContext(Store);
  // eslint-disable-next-line
  const [prefectures, setPrefectures] = useState([])
  // eslint-disable-next-line
  const [populations, setPopulations] = useState([])

  useEffect(() => {
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
  console.log(CheckBoxList, "CheckBoxList")
  console.log(getDemographics, "----------")



  return (
    <>
      <h1>
        hello
    </h1>
      <tr>
        <th>都道府県</th>
      </tr>


      <CheckBoxList />
      {/* <ul>
        {globalState && globalState.result_data.map((data, index) => (
          <div key={index}>
            {data.prefCode}
            {data.prefName}
          </div>

        ))}
      </ul> */}


    </>

  );
}

export default App;
