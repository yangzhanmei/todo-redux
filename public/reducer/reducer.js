export default function reducer(state = {todos: [],filterName:'ALL'}, action) {
    if (action.type === 'ADD') {
        state.todos.push({todo: action.todo, isDone: false});
        return state;
    }
    if (action.type === 'DELETE') {
        state.todos.splice(action.index, 1);
        return state;
    }
    if (action.type === 'TOGGLE') {
        state.todos[action.index].isDone = !state.todos[action.index].isDone;
        return state;
    }
    if(action.type === 'FILTER'){
        state.filterName = action.filterName;
        return state;
    }

    return state;
}