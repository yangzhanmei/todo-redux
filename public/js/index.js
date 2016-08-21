import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Reducer from '../reducer/reducer';
import {createStore} from 'redux';

let store = createStore(Reducer);

class App extends Component {
    add(value) {
        store.dispatch({type: 'ADD', todos: {todo: value, isDone: false}})
    }

    render() {
        return <div>
            <AddTodo add={this.add.bind(this)}/>
            <TodoList/>
        </div>
    }
}

class AddTodo extends Component {
    add() {
        const value = this.refs.input.value;
        this.props.add(value);
    }

    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}

class TodoList extends Component{
    render(){
        return <div>
            todoList
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('content'));