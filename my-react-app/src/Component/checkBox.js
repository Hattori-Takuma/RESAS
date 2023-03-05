import React, { useState, useEffect, useContext } from 'react';
import { Store } from '../store';

export const CheckBoxList = () => {

  const [prefData, setPrefData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  const { globalState } = useContext(Store);

  console.log(globalState, 'globalState check***');

  useEffect(() => {
    if (globalState.hasOwnProperty('result_data')) {
      setPrefData(globalState.result_data);
    }
  }, [globalState]);

  useEffect(() => {
    const test = Object.keys(checkedItems);
    console.log('🚀 ~ file: checkBox.js:34 ~ handleChange ~ test:', test);
  }, [checkedItems]);



  const handleChange = (e) => {
    //checkedItemsのstateをセット

    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    });
  };

  console.log(checkedItems, 'チェックされているアイテム');


  return (
    <>
      <h2>都道府県</h2>

      <>
        {prefData.map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={item.prefCode}>{item.prefName}</label>
              <input
                id={item.prefCode}
                type="checkbox"
                name="inputNames"
                onChange={handleChange}
              />
            </div>
          );
        })}
      </>

    </>
  )
}



