import React, { Component } from 'react';
import styled from "./Home.css";
import SearchCom from "../../component/SearchCom/SearchCom.jsx";

export default class Home extends Component{
    render(){
        return(
            <div className={styled.bg}>
                <SearchCom />
            </div>
        )
    }
}