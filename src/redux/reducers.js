import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import cart from "reducers/cart";


export default combineReducers({
  counter,
  userInfo,
  cart
});