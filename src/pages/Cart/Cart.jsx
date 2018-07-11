import React,{ Component } from  "react";
import styled from "./cart.css";
import { cartTest } from "actions/cart";
import { connect } from "react-redux";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

    showActionSheet(){
        
    }

  render() {
    return <div>
        <WingBlank>
          <Button type="primary" style={{ marginTop: "50px" }} onClick={() => this.props.cartTest()}>
            primary
          </Button>
          <WhiteSpace />
        </WingBlank>
      </div>;
  }
}

// //mapStateToProps把redux的state转化为组件的props
const mapStateToProps = (state) => {
    return { cart: state.cart };
};

// //mapDispatchToProps把actions转化为props的属性函数
const mapDispatchToProps = (dispatch) => {
    return {
        cartTest: () => {
          dispatch(cartTest());
        },
        ajaxTest: () => {
          dispatch(ajaxTest());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);