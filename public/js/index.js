import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import reducer from '../reducer/reducer';
import {createStore} from 'redux';

let store = createStore(reducer);

class App extends Component {
    add(todo) {
        store.dispatch({type: 'ADD', todo});
    }

    delete(index) {
        store.dispatch({type: 'DELETE', index})
    }

    toggle(index) {
        store.dispatch({type: 'TOGGLE', index});
    }

    render() {
        return <div>
            <AddTodo add={this.add.bind(this)}/>
            <TodoList todos={store.getState().todos} delete={this.delete.bind(this)} toggle={this.toggle.bind(this)}/>
            <Footer/>
        </div>
    }
}

class AddTodo extends Component {
    add() {
        const value = this.refs.input.value;
        this.props.add(value);
        this.refs.input.value = '';
        this.refs.input.focus();
    }

    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}

class TodoList extends Component {
    delete(index) {
        this.props.delete(index);
    }

    toggle(index) {
        this.props.toggle(index);
    }

    render() {
        const todos = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this, index)}/>
                <span style={{"textDecoration": todo.isDone ? "line-through" : ""}}>{todo.todo}</span>
                <button onClick={this.delete.bind(this, index)}>x</button>
            </div>
        });
        return <div>
            {todos}
        </div>
    }
}

class Footer extends Component {
    render() {
        return <div>
            footer
        </div>
    }
}

function showRender() {
    ReactDOM.render(<App/>, document.getElementById('content'));
}

store.subscribe(showRender);
showRender();
