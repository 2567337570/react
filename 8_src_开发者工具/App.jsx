import React, {Component} from 'react';
// import Count from "./components/Count";
import Count from "./containers/Count";
import store from "./redux/store";
import Person from "./containers/Person";

class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
                <hr/>
                <Person></Person>
            </div>
        );
    }
}

export default App;