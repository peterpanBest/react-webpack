import React , { Component } from "react";
// import CSSModules from 'react-css-modules';
import style from "./index.css";

class Index extends Component{
    render(){
        return (
            <div className={style.bg}>
                hello ,peter!
            </div>
        )
    }
}

export default Index;