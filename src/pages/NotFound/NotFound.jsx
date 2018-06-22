import React, { Component } from "react";
import styled from "./notFound.css";
import { Button, Flex } from "antd-mobile";
import history from "../../history";

export default class NotFound extends Component{
    constructor(props) {
        super(props);
    }

    goToHome = () => {
        //history.push("/home");
        console.log(this);
    }

    render() {
        return ( 
            <div className={styled.box}>
                <div className={styled.bgImgBox}>
                    <div className={styled.bgImg}></div>
                    <p className={styled.bgWord}>抱歉，页面去火星啦...</p>
                    <Flex justify="center">
                        <Button type="primary" className={styled.btn} onClick={this.goToHome}>回到首页</Button>
                    </Flex>
                </div>
            </div>
        );
    }
    
}

