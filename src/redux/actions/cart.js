export const GET_INFO_REQUEST = "cart/GET_USER_INFO_REQUEST";
export const GET_INFO_SUCCESS = "cart/GET_USER_INFO_SUCCESS";
export const GET_INFO_FAIL = "cart/GET_USER_INFO_FAIL";
import axios from "axios";
//此时用的是 types 而不是 type
export function cartTest() {
    return { 
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL], 
        promise: axios => axios.post("http://stgexpsvr.perfect365.com/perfect365/perfect365web/services", doData())
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          }) 
    };
}

export function ajaxTest() {
    return (dispatch) => {
        dispatch({
            type: GET_INFO_REQUEST
        });
        axios.post("http://stgexpsvr.perfect365.com/perfect365/perfect365web/services", doData())
            .then(function (response) {
                dispatch({
                    type: GET_INFO_SUCCESS,
                    data
                })
            })
            .catch(function (error) {
                console.log(error);
            }) 
    }
}

function doData() {
    var param = {
        sysPara: { "code": 10059 },
        bizPara: { "top": 8, "score": 0, "hashTagContent": "#365VIP" }
    };
    var fd = new FormData();
    fd.append("sysPara", JSON.stringify(param.sysPara));
    fd.append("bizPara", JSON.stringify(param.bizPara));
    return fd;
}
