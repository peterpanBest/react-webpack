import * as at from "./actionType";
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

function* testAjax(action) {
    console.log(action)
    const p = function () {
        return axios.post("http://stgexpsvr.perfect365.com/perfect365/perfect365web/services", doData())
            .then(function (data) {
                return data;
            })
            .catch(function (error) {
                return error;
            }) 
    }

    const res = yield call(p);

    yield put({      // dispatch一个action到reducer， payload是请求返回的数据
        type: at.GET_INFO_SUCCESS,
        payload: res
    })
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
    yield takeEvery(at.GET_INFO, testAjax)   // 如果有对应type的action触发，就执行goAge()函数
}

function doData() {
  var param = {
    sysPara: { code: 10059 },
    bizPara: { top: 8, score: 0, hashTagContent: "#365VIP" }
  };
  var fd = new FormData();
  fd.append("sysPara", JSON.stringify(param.sysPara));
  fd.append("bizPara", JSON.stringify(param.bizPara));
  return fd;
}

export default rootSaga;   