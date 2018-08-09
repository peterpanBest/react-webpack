import React, { Component } from 'react';
import styled from "./home.css";
import SearchCom from "../../component/SearchCom/SearchCom.jsx";
import SwiperCom from "../../component/swiper/SwiperCom.jsx";
import ServiceCom from "../../component/ServiceCenter/ServiceCom.jsx";
import RewardCom from "../../component/Activity/RewardActivity/RewardCom.jsx";

export default class Page1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            servicesList: [
                {
                    title: "京东超市",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t20194/253/2564852099/190706/6d0e28a9/5b59cd0eN9b31cb63.gif"
                },
                {
                    title: "唯品会",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t16852/352/1845473041/9082/ec3e82d1/5ad882eeN701fb60d.png"
                },
                {
                    title: "京东服饰",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t18865/90/1804471517/14538/72c79ba/5ad87b67N1ebcb69b.png"
                },
                {
                    title: "京东生鲜",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"
                },
                {
                    title: "京东到家",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"
                },
                {
                    title: "充值缴费",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"
                },
                {
                    title: "9.9元拼",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"
                },
                {
                    title: "领券",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t19495/200/1823004232/14065/ca00ab2c/5ad87cf5N4ad8e6f1.png"
                },
                {
                    title: "赚钱",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png"
                },
                {
                    title: "全部",
                    src: "https://m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png"
                }
            ]
        };
    }

    render(){
        return (
            <div className={styled.bg}>
                <SearchCom />
                <SwiperCom />
                <ServiceCom service={this.state.servicesList} />
                <RewardCom />
            </div>
        )
    }
}