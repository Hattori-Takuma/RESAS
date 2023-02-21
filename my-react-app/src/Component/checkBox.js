import React, { useState, useEffect, useContext } from 'react';
import { Store } from '../store';

//checkboxコンポーネント
const CheckBox = ({ id, value, checked, onChange }) => {
  return (
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      onChange={onChange}
      value={value}
    />
  )
}
export const CheckBoxList = () => {
  const { globalState } = useContext(Store);

  console.log(globalState, 'globalState check***')

  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = e => {
    //checkedItemsのstateをセット
    setCheckedItems({
      ...checkedItems,
      [e.target.id]: e.target.checked
    })
    console.log('checkedItems:', checkedItems)
  }
  return (
    <>
      <h2>都道府県</h2>
      <>
        {/* {globalState.result_data.map((item, index) => {
          index = index + 1
          return (
            <label htmlFor={`id_${index}`} key={`key_${index}`}>
              <CheckBox
                id={`id_${index}`}
                value={item.prefNmae}
                onChange={handleChange}
                checked={checkedItems[item]}
              />
              {item}
            </label>
          )
        })} */}
      </>

    </>
  )
}



