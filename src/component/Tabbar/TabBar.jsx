import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {
    BrowserRouter as Router,
    Route, Link,
    Redirect, withRouter
} from "react-router-dom";
import history from '../../history';

const _homePng = require("../../../public/image/_home.png");
const homePng = require("../../../public/image/home.png");
const typePng = require("../../../public/image/type.png");
const _typePng = require("../../../public/image/_type.png");
const cart = require("../../../public/image/cart.png");
const my = require("../../../public/image/my.png");
const _my = require("../../../public/image/_my.png");
// import styled from 'styled-components';
 
export default class TabbarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false,
        };
    }
    render() {
        return (
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title=""
                        key="Life"
                        icon={<div style={{
                            width: '80px',
                            height: '70px',
                            background: 'url('+homePng+') center center /  70px 50px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '80px',
                            height: '70px',
                            background: "url("+_homePng+") center center /  70px 50px no-repeat"
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                            history.push("/home");
                        }}
                        data-seed="logId"
                    />

                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '80px',
                                height: '70px',
                                background: 'url('+typePng+') center center /  70px 50px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '80px',
                                height: '70px',
                                background: 'url('+_typePng+') center center /  70px 50px no-repeat'
                            }}
                            />
                        }
                        title=""
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            history.push("/counter");
                        }}
                        data-seed="logId1"
                    />

                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '80px',
                                height: '70px',
                                background: 'url('+cart+') center center /  70px 50px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '80px',
                                height: '70px',
                                background: 'url('+cart+') center center /  70px 50px no-repeat'
                            }}
                            />
                        }
                        title=""
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                            history.push("/cart");
                        }}
                    />

                    <TabBar.Item
                        icon={
                            <div style={
                                {
                                    width: '80px',
                                    height: '70px',
                                    background: 'url('+my+') center center /  70px 50px no-repeat'
                                }
                            }
                            />
                        }

                        selectedIcon={
                            <div style={{
                                width: '80px',
                                height: '70px',
                                background: 'url('+_my+') center center /  70px 50px no-repeat'
                            }}
                            />
                        }

                        title=""
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                            history.push("/userinfo");
                        }}
                    />
                </TabBar>
        );
    }
}