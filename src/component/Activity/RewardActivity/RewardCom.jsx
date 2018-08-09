import React, { Component } from "react";
import styled from "./reward.css";
import newsImg from "../../../../public/image/jd-news-tit.png";

export default class RewardCom extends Component {
    render() {
        return (
            <div className={styled.container}>
                <span><img src={newsImg} alt=""/></span>
            </div>
        )
    }
}