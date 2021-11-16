import React, {Component} from 'react';
import {createIncrementAction, createDecrementAction , createDecrementAsyncAction} from '../../redux/count_action';
import {connect} from 'react-redux';
// 定义UI 组件
class Count extends Component {
    increment = () => {
        const {value} = this.selectNumber;
        this.props.jia(Number(value));
    }

    decrement = () => {
        const {value} = this.selectNumber;
        this.props.jian(Number(value));
    }

    // 奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if(this.props.count % 2 !== 0) {
            this.props.jia(Number(value));
        }
    }

    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.jiaAsync(Number(value),500)
    }

    render() {
        console.log('UI接受的props',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}
//映射状态
// const mapStateToProps = state => ({count:state});

//映射操作状态方法
// const dispatchToProps = dispatch => (
//     {
//         jia:number=> dispatch(createIncrementAction(number)),
//         jian :number=> dispatch(createDecrementAction(number)),
//         jiaAsync: (number,time)=> dispatch(createDecrementAsyncAction(number,time))
//     }
// )

export default connect(
    state => ({count:state}),
    //mapDispatchToProps的一般写法
    /*dispatch => ({
        jia:number=> dispatch(createIncrementAction(number)),
        jian :number=> dispatch(createDecrementAction(number)),
        jiaAsync: (number,time)=> dispatch(createDecrementAsyncAction(number,time))
    })*/
    //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createDecrementAsyncAction
    }
)(Count);
