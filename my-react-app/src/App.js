import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Store } from '../src/store/index';
import { PREFECTURES } from '../src/action/index';
// eslint-disable-next-line
import { fetchPrefecture } from '../src/functions/resas';





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

  // const values = [
  //   { id: globalState.result_data.prefCode, item: globalState.result_data }
  // ];
  // console.log(values)
  // const CheckBoxItems = ({ onchange, checked }) =>
  //   values.map((value) => {
  //     return (
  //       <label key={value.id}>
  //         <input
  //           type="checkbox"
  //           value={values.item}
  //           onChange={onchange}
  //           checked={checked.includes(value.item)}
  //         />
  //         {value.item}
  //       </label>
  //     );
  //   });


  // const InputCheckBox = () => {
  //   const [checkedValues, setCheckedValues] = useState([]);
  //   const handleChange = (e) => {
  //     if (checkedValues.includes(e.target.value)) {
  //       setCheckedValues(
  //         checkedValues.filter((checkedValues) =>
  //           checkedValues !== e.target.value));
  //     }
  //     else {
  //       setCheckedValues([...checkedValues, e.target.value]);
  //     }
  //   };

  //   return (
  //     <div>
  //       <p>
  //         現在選択されている値:<b>{checkedValues.join(",")}</b>
  //       </p>
  //       <CheckBoxItems onChange={handleChange} checked={checkedValues} />
  //     </div>
  //   );
  // }
  // console.log(values)



  return (
    <>
      <h1>
        hello
    </h1>
      <tr>
        <th>都道府県</th>
      </tr>
      {/* .{InputCheckBox}. */}
      <ul>
        {globalState.result_data.map((data, index) => (
          <div key={index}>
            {data.prefCode}
            {data.prefName}
          </div>

        ))}
      </ul>
    </>

  );
}

export default App;
