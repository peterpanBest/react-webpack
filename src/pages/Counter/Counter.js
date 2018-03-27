import React, { Component } from 'react';
import { increment, decrement, reset } from 'actions/counter';

import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>22222</h1>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

//mapStateToProps把redux的state转化为组件的props
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

//mapDispatchToProps把actions转化为props的属性函数
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);