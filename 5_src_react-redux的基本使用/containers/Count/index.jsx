// 引入CountUI组件
import CountUI from "../../components/Count";
//引入action
import {createIncrementAction, createDecrementAction , createDecrementAsyncAction} from '../../redux/count_action';
// 引入store
import store from "../../redux/store";
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

// 1.mapStateToProps函数的返回是一个对象：
// 2.返回的对象中的key就作为状态传递给UI组件props的key,value就作为状态传递给UI组件props的value
// 3.mapStateToProps用于传递状态
const mapStateToProps = state => {
    return ({count:state});
}
// 1.dispatchToProps函数的返回是一个对象：
// 2.返回的对象中的key就作为状态传递给UI组件props的key,value就作为状态传递给UI组件props的value
// 3.dispatchToProps用于传递操作状态的方法
const dispatchToProps = dispatch => {
    return {
        jia: number=> dispatch(createIncrementAction(number)),
        jian: number=> dispatch(createDecrementAction(number)),
        jiaAsync: (number,time)=> dispatch(createDecrementAsyncAction(number,time))
    }
}

// 使用connect()()创建并暴露一个count容器组件
export default connect(mapStateToProps,dispatchToProps)(CountUI);
