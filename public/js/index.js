import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import reducer from '../reducer/reducer';
import {createStore} from 'redux';

let store = createStore(reducer);

class App extends Component {
    add(todo) {
        store.dispatch({type: 'ADD', todo});
    }

    delete(id) {
        const index = store.getState().todos.indexOf(store.getState().todos.find(todo => id === todo.id));
        store.dispatch({type: 'DELETE', index})
    }

    toggle(id) {
        const index = store.getState().todos.indexOf(store.getState().todos.find(todo => id === todo.id));
        store.dispatch({type: 'TOGGLE', index});
    }

    filter(filterName) {
        store.dispatch({type: 'FILTER', filterName});
    }

    filterTodos() {
        if (store.getState().filterName === 'ALL') {
            return store.getState().todos;
        } else if (store.getState().filterName === 'ACTIVE') {
            return store.getState().todos.filter(todo => !todo.isDone);
        } else {
            return store.getState().todos.filter(todo => todo.isDone);
        }
    }

    render() {
        return <div>
            <AddTodo add={this.add.bind(this)}/>
            <TodoList todos={this.filterTodos()} delete={this.delete.bind(this)}
                      toggle={this.toggle.bind(this)}/>
            <Footer filter={this.filter.bind(this)}/>
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
    delete(id) {
        this.props.delete(id);
    }

    toggle(id) {
        this.props.toggle(id);
    }

    render() {
        const todos = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this, todo.id)}/>
                <span style={{"textDecoration": todo.isDone ? "line-through" : ""}}>{todo.todo}</span>
                <button onClick={this.delete.bind(this, todo.id)}>x</button>
            </div>
        });
        return <div>
            {todos}
        </div>
    }
}

class Footer extends Component {
    filter(type) {
        this.props.filter(type);
    }

    render() {
        return <div>
            <button onClick={this.filter.bind(this, "ALL")}>All</button>
            <button onClick={this.filter.bind(this, "ACTIVE")}>Active</button>
            <button onClick={this.filter.bind(this, "COMPLETE")}>Completed</button>
        </div>
    }
}

function showRender() {
    ReactDOM.render(<App/>, document.getElementById('content'));
}

store.subscribe(showRender);
showRender();
