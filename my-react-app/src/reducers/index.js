import { PREFECTURES, POPULATIONS } from '../action/index'

const reducer = (state = [], action) => {
  switch (action.type) {


    case PREFECTURES:
      console.log(action.data, "action の中身を確認")
      return { ...state, result_data: action.data }

    default:
      return state


    case POPULATIONS:
      return { state }


  }

};

export default reducer;