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


export const getDemographics = async (prefectures = 1) => {
  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=1`;
  axios
    .get(url, {
      headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' },
    })
    .then((res) => {
      console.log(res, '--------------------');
    });
  // requestするURLを作成
  // const requestUrls = prefectures.map(({ prefCode }) => {
  //   return `/population/composition/perYear?prefCode=${prefCode}`;
  // });
};

// export const fetchDemographics = async (prefectures) => {
//   const requestUrls = prefectures.map(({ prefCode }) => {
//     return `/population/composition/perYear?prefCode=${prefCode}`;
//   });
//   const url = `https://opendata.resas-portal.go.jp/api/v1/` + { requestUrls };
//   axios
//     .all(url, {
//       headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' },
//     })
//     .then((res) => {
//       console.log(res, 'llllllllll')
//     });
//   // requestするURLを作成
//   // const requestUrls = prefectures.map(({ prefCode }) => {
//   //   return `/population/composition/perYear?prefCode=${prefCode}`;
//   // });
// };


export async function getPopulationData(prefCodes) {
  const requests = prefCodes.map(prefCode => {
    return axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`, {
      headers: {
        'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' // ここにあなたのAPIキーを入力してください
      }
    });
  });
  const responses = await axios.all(requests);
  const populationData = responses.map(response => {
    return response.data.result.data[0];
  });
  console.log(populationData, '総人口データ')
  return populationData;

}









