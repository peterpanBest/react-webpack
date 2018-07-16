import React, {Component} from 'react';
import styled from "./loading.css";
import loadingImg from "./gif/loading.gif";

export default class Loading extends Component {
    render() {
        return <div className={styled.p365Container}>
            <div className={styled.p365LoadingView}>
              <div className={styled.p365LoadingPointView}>
                <img src={loadingImg} alt="loading" className={styled.p365LoadingPointViewImg} />
              </div>
            </div>
          </div>;
    }
}