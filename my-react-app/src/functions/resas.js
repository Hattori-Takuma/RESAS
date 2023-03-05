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

export const fetchGetpopulationData = async () => {
  axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode= +checkedItems  ', {
    headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' }
  })
    .then(res => {
      console.log(res, "res,check")
    })
}
