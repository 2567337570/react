import React, {Component} from 'react';
// import Count from "./components/Count";
import Count from "./containers/Count";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <div>
                {/* 给容器组件传递store,必须是上传组件通过props传递给容器组价*/}
                <Count store={store}></Count>
            </div>
        );
    }
}

export default App;