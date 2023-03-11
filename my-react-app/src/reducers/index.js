import { POPULATIONS, PREFECTURES } from '../action/index';

const reducer = (state = [], action) => {
  switch (action.type) {
    case PREFECTURES:
      return { ...state, result_data: action.data };
    case POPULATIONS:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
