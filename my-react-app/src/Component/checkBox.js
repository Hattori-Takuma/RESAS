import React, { useContext, useEffect, useState } from 'react';
import { POPULATIONS } from '../action/';
import { getPopulationData } from '../functions/resas';
import { Store } from '../store';

export const CheckBoxList = () => {
  const [prefData, setPrefData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    if (globalState.hasOwnProperty('result_data')) {
      setPrefData(globalState.result_data);
    }
  }, [globalState]);

  useEffect(() => {
    const prefCodes = Object.keys(checkedItems);
    console.log(
      '🚀 ~ file: checkBox.js:34 ~ handleChange ~ prefCodes:',
      prefCodes
    );
    fetchData();
  }, [checkedItems]);

  const fetchData = async () => {
    const res = await getPopulationData();
    setGlobalState({
      type: POPULATIONS,
      data: res.result,
    });
  };

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
  );
};

