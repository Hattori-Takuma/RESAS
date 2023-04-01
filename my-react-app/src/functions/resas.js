import axios from 'axios';
import { extractNumberFromUrl, prefCodeToPrefName } from "../functions/utils"

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

export const fetchDemographics = async (prefCodes, result_data) => {
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
  console.log(
    '🚀 ~ file: resas.js:45 ~ fetchDemographics ~ responses:',
    responses
  );

  const populationData = responses.map((response) => {
    const url = response.config.url;

    const prefCode = extractNumberFromUrl(url);
    console.log(
      '🚀 ~ file: resas.js:51 ~ populationData ~ prefCode:',
    );
    const prefName = prefCodeToPrefName(prefCode, result_data);
    response.data.result.data[0].prefName = prefName
    return response.data.result.data[0];
  });
  console.log(
    '🚀 ~ file: resas.js:52 ~ populationData ~ populationData:',
    populationData
  );

  return populationData;
};




