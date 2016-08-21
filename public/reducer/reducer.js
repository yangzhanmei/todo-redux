export default function reducer(state = {todos: []}, action) {
    if (action.type === 'ADD') {
        state.todos.push(action.todos);
        return state;
    }
    return state;
}