import React , { Component } from "react";
// import CSSModules from 'react-css-modules';
import style from "./index.css";
import TabbarCom from "../../component/Tabbar/TabBar.jsx";
import getRouter from 'router/router';

class Index extends Component{
    render() {
        return (
            <div>
                {getRouter()}
                <TabbarCom />
            </div>   
        )
    }
}

export default Index;