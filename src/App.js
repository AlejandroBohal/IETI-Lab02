import React, {Component} from 'react';
import {Login} from './Components/Login';
import {TodoApp} from './Components/TodoApp';

class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <TodoApp/>
            </div>
        )

    }
}
export default App;

