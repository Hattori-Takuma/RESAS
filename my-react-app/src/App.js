import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import todouhukenn from '../src/functions/resas'





function App() {

  useEffect(() => {
    console.log('useEffect が呼び出されました。');
    axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {

      headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
    }
    )
      .then(res => {
        console.log(res, "res,check")
      })
  }, []);


  return (

    <div className="App">
      HELLO
    </div>
  );
}

export default App;
