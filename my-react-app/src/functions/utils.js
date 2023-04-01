export const extractNumberFromUrl = (url) => {
  const matches = url.match(/\d+$/);
  return matches ? parseInt(matches[0]) : null;
}


export const prefCodeToPrefName = (prefCode, list) => {
  const pref = list.find((item) => item.prefCode === prefCode);
  return pref ? pref.prefName : null;
};

// const name = globalState.result_data[prefCode - 1].prefName.map((d) => d.prefName);
  // const name = globalState.result_data[prefCode-1].prefName.map((d) => d.year);

