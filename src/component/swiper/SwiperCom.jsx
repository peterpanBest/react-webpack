import React, { Component } from "react";
import styled from "./swiper.css";
import { Carousel } from "antd-mobile";

export default class SwiperCom extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        };
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
              data: [
                {
                  src:
                    "https://m.360buyimg.com/mobilecms/s750x366_jfs/t20977/297/2472262725/127155/893c4e0/5b592d67N2a68271c.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                },
                {
                  src:
                    "https://img1.360buyimg.com/da/s750x366_jfs/t20689/151/2358949662/351223/1a52c251/5b558013Ned28d856.jpg!cr_1125x549_0_72.dpg"
                },
                {
                    src: "https://m.360buyimg.com/mobilecms/s750x366_jfs/t24421/15/709096977/127852/6eb7f7c1/5b3e0566N62664a43.jpg!cr_1125x549_0_72!q70.jpg.dpg"
                }
              ]
            });
        }, 100);
    }

    render() {
        return (
            <div className={styled.ulContainer}>
                    <Carousel
                        slideWidth={1}
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val.src}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: '300' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
            </div>
        )
    }
}