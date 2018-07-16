import * as at from "../actionType";
import axios from "axios";

export function ajaxTest(value) {
    return {
        type: at.GET_INFO,
        test: value
    }
}
