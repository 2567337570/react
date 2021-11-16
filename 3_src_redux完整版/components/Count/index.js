import React, {Component} from 'react';
// 引入store中保存状态
import store from "../../redux/store";
// 引入actionCreate,专门用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
class Count extends Component {
    // componentDidMount() {
    //     // 检测redux状态的变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({});
    //     });
    // }

    increment = () => {
        const {value} = this.selectNumber;
        //通知redux加value
        store.dispatch(createIncrementAction(Number(value)));
    }
    decrement = () => {
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(Number(value)));
    }

    // 奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = store.getState();
        if(count % 2 !== 0) store.dispatch(createDecrementAction(Number(value)));
    }
    incrementAsync = () => {
        setTimeout(()=> {
            const {value} = this.selectNumber;
            store.dispatch(createDecrementAction(Number(value)));
        },500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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

export default Count;