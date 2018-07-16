import React, { Component } from "react";
import styled from "./searchcom.css";

export default class SearchCom extends Component{
    render(){
        return (
            <div>
                <div className={styled.box}>
                    <div className={styled.w700}>
                        <span className={styled.searchIcon}></span>
                        <div className={styled.searchDiv}>
                            <span className={styled.spanIcon}></span>
                            <span className={styled.searchSearch}></span>
                            <span className={styled.inputDiv}></span>
                        </div>
                        <span className={styled.loginSpan}>登录</span>
                    </div>
                </div>
            </div>
        )
    }
}