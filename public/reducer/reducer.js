export default function reducer(state = {todos: [], filterName: 'ALL'}, action) {
    switch (action.type) {
        case 'ADD':
            state.todos.push({todo: action.todo, isDone: false});
            return state;
        case 'DELETE':
            state.todos.splice(action.index, 1);
            return state;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return state;
        case 'FILTER':
            state.filterName = action.filterName;
            return state;
    }

    return state;
}