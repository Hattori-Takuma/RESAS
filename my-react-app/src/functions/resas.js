import axios from 'axios';




export const fetchPrefecture = async () => {
  try {
    const res = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
    });
    console.log(res.data, "test");
    return res.data;
  } catch (error) {
    throw error;
  }
};



// const fetchPrefecture = async () => {
//   await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
//     headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
//   })
//     .then(res => {
//       setGlobalState({
//         type: PREFECTURES,
//         data: res.data.result
//       });
//       console.log(res)
//       setPrefectures(res.data.result)
//     })
// }


export const fetchGetpopulationData = async () => {
  axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=', {
    headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
  })
    .then(res => {
      console.log(res, "res,check")
    })
}















// export default function todouhukenn() {
//   console.log('useEffect が呼び出されました。');
//   axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {

//     headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
//   }
//   )
//     .then(res => {
//       console.log(res, "res,check")
//     })
// }


// export default function population() {
//   console.log('useEffect が呼び出されました。');
//   axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', {

//     headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
//   }
//   )
//     .then(res => {
//       console.log(res, "res,check")
//     })
// }





