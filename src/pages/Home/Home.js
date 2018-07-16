import React, { Component } from 'react';
import styled from "./home.css";
import SearchCom from "../../component/SearchCom/SearchCom.jsx";

export default class Page1 extends Component{
    render(){
        return(
            <div className={styled.bg}>
                <SearchCom />
            </div>
        )
    }
}