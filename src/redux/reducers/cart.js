import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL } from "actions/cart";

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ''
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {},
        errorMsg: ''
      };
    case GET_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.result,
        errorMsg: ''
      };
    case GET_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo: {},
        errorMsg: '请求错误'
      };
    default:
      return state;
  }
}

function addCountNum(value){
  return { countNum: value.countNum + 1 };
}


