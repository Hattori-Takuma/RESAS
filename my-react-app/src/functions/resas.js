import axios from 'axios';


export function todouhukenn() {
  console.log('useEffect が呼び出されました。');
  axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {

    headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
  }
  )
    .then(res => {
      console.log(res, "res,check")
    })
}
