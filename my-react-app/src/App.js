import React, { useContext, useEffect, useState } from 'react';
import { PREFECTURES } from '../src/action/index';
import { Store } from '../src/store/index';
import './App.css';
// eslint-disable-next-line
import { CheckBoxList } from '../src/Component/checkBox';
import { fetchPrefecture } from '../src/functions/resas';

function App() {
  const { globalState, setGlobalState } = useContext(Store);
  // eslint-disable-next-line
  const [prefectures, setPrefectures] = useState([]);
  // eslint-disable-next-line
  const [populations, setPopulations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetchPrefecture();
    setGlobalState({
      type: PREFECTURES,
      data: res.result,
    });
  };
  return (
    <>
      <h1>hello</h1>
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