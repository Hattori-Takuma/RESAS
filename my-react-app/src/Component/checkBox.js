import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../store';

export const CheckBoxList = () => {
  const [prefData, setPrefData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  console.log(
    '🚀 ~ file: checkBox.js:7 ~ CheckBoxList ~ checkedItems:',
    checkedItems
  );
  const { globalState } = useContext(Store);

  useEffect(() => {
    if (globalState.hasOwnProperty('result_data')) {
      setPrefData(globalState.result_data);
    }
  }, [globalState]);

  const handleChange = (e) => {
    //checkedItemsのstateをセット
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked,
    });
  };
  return (
    <>
      <h2>都道府県</h2>

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
  );
};
