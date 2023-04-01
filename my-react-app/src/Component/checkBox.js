import React, { useContext, useEffect, useState } from 'react';
import { POPULATIONS } from '../action/';
import { fetchDemographics } from '../functions/resas';
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
    const fetchData = async () => {
      const prefCodes = [];
      for (const key in checkedItems) {
        if (checkedItems.hasOwnProperty(key) && checkedItems[key]) {
          prefCodes.push(key);
        }
      }
      const res = await fetchDemographics(prefCodes, globalState.result_data);

      setGlobalState({
        type: POPULATIONS,
        data: res,
        prefCodes,
      });
    };
    fetchData();
  }, [checkedItems, setGlobalState]);

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
      <div id="chart-container"></div>
    </>
  );
};
