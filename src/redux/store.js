import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import combineReducers from './reducers';

//不使用自定义的中间件，改用 redux-promise-middleware
// import promiseMiddleware from './middleware/_promiseMiddleware';
// import promiseMiddleware from "redux-promise-middleware";

//使用 redux-saga
const sagaMiddleware = createSagaMiddleware(); 

let store;
// let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));
//这里使用了 redux devTools chrome 插件，做了相关配置
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
    store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
} else {
    store = createStore(combineReducers, compose( applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )); //插件调试，未安装会报错
}

export default store;

sagaMiddleware.run(rootSaga);