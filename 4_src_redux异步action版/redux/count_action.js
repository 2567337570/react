/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from './constant';
// import store from "./store";

// 同步action
export const createIncrementAction = data => ({type:INCREMENT,data});
export const createDecrementAction = data => ({type:DECREMENT,data});

// 异步action,action值为函数，实则就是返回函数,异步action中，一般都会调用同步action，异步action不是必须要用的
export const createDecrementAsyncAction = (data,time) => {
    // redux-thunk中间件
    return dispatch => {
        setTimeout (() => {
            dispatch(createIncrementAction(data));
        },time)
    }

}
