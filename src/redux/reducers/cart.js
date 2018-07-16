import * as at from "../actionType";

const initState = {
  isPending: true,
  image: null
};

export default function cart(state = initState, action) {
  switch (action.type) {
    case at.GET_INFO_SUCCESS:
      console.log("GET_INFO_SUCCESS", action);
      return initState;
    case "GET_DOG_FULFILLED":
      console.log("reducer");
      return {
        isPending: false,
        image: action.payload.message,
      };
    case "GET_DOG_REJECTED":
      console.log("REJECTED");
    default:
      return state;
  }
}


