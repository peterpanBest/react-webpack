import React, { Component} from "react";
import styled from "./serviceCenter.css";
import { deflate } from "zlib";

class ServiceCom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styled.container}>
        <ul className={styled.ulContainer}>
          {
            this.props.service.map((val, i) => 
              <li key={i} className={styled.liContainer}>
                <a className={styled.liContaineA}>
                  <span className={styled.liContaineImg}><img src={val.src} alt="" /></span>
                  <span className={styled.liContaineTile}>{val.title}</span>
                </a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default ServiceCom;;