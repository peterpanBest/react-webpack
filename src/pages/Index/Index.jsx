import React , { Component } from "react";
// import CSSModules from 'react-css-modules';
import style from "./index.css";
// import TabbarCom from "../../component/Tabbar/Tabbar.jsx";
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Index extends Component{
    render(){
        return (
            <div>
                <Button>default</Button><WhiteSpace />
                <Button disabled>default disabled</Button><WhiteSpace />

                <Button type="primary">primary</Button><WhiteSpace />
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

                <Button type="warning">warning</Button><WhiteSpace />
                <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
              
            </div>
        )
    }
}

export default Index;