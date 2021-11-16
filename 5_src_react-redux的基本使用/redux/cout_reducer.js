/**
 * 1.该文件创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * 2、reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）
 */
import {INCREMENT,DECREMENT} from './constant'
const initState = 0;  // 初始化状态
export default function coutReducer(preState = initState,action) {
    // console.log('preState： ' + preState);
    // console.log(action);
    // if(preState === undefined) preState = 0;
    // 从action中获取：type,data
    const {type, data} = action;
    switch (type) {
        case INCREMENT:   // 加
            return preState + data;
        case DECREMENT: // 减法
            return preState - data;
        default:
            return preState;
    }
}

