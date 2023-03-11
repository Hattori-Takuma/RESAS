import axios from 'axios';

export const fetchPrefecture = async () => {
  try {
    const res = await axios.get(
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGetpopulationData = async () => {
  axios
    .get(
      'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode= +checkedItems  ',
      {
        headers: { 'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT' },
      }
    )
    .then((res) => {
      console.log(res, 'res,check');
    });
};


export const fetchDemographics = async (prefCodes) => {
  if (prefCodes.length === 0) return;
  const requests = prefCodes.map((prefCode) => {
    return axios.get(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: {
          'X-API-KEY': 'L2W6aJTvDLkORbWHwoa2q9X0FnCknyfujbdZdWGT',
        },
      }
    );
  });

  const responses = await axios.all(requests);

  const populationData = responses.map((response) => {
    return response.data.result.data[0];
  });

  return populationData;
};
