import React,{ Component } from  "react";
import { connect } from 'react-redux';
import styled from "./cart.css";
import { ajaxTest } from "actions/cart";
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import store from "../../redux/store";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

    showActionSheet(){
        
    }

  render() {
    const str = 'hello';
    return (
      <div>
        <WingBlank>
          <Button type="primary" style={{ marginTop: "50px" }} onClick={() => { this.props.ajaxTest('test value') }}>
            primary
          </Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}

// export default Home;

//mapStateToProps把redux的state转化为组件的props
const mapStateToProps = (state) => {
  return { isLoading: state.isLoading };
};

//mapDispatchToProps把actions转化为props的属性函数
const mapDispatchToProps = (dispatch) => {
    return {
      ajaxTest: (value) => {
          dispatch(ajaxTest(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);