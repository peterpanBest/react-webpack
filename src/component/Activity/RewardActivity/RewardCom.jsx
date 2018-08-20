import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import styled from "./reward.css";
import newsImg from "../../../../public/image/jd-news-tit.png";

export default class RewardCom extends Component {
    render() {
        return (
            <div className={styled.container}>
                <div className={styled.newsBox}>
                    <span className={styled.newsContainer}><img className={styled.newsContainerImg} src={newsImg} alt="" /></span>
                    <Carousel className={styled.myCarousel}
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                        speed={300}
                        autoplayInterval={2000}
                        resetAutoplay={false}
                    >
                        {['iphone9 九月问世，性能惊人', '为什么懂电脑的人不买i7处理器', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                            <div className="v-item" key={type}>{type}</div>
                        ))}
                    </Carousel>
                    <span className={styled.more}>更多</span>
                </div>
            </div>
        )
    }
}