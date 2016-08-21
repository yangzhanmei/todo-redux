import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Reducer from '../reducer/reducer';
import {createStore} from 'redux';

let store = createStore(Reducer);

class App extends Component{
    render(){
        return <div>
           App
            {store.getState().todos}
        </div>
    }
}

ReactDOM.render(<App/>,document.getElementById('content'));