export default function reducer(state = {todos: []}, action) {
    if (action.type === 'ADD') {
        state.todos.push({todo:action.todo,isDone:false});
        return state;
    }
    if(action.type === 'DELETE'){
        state.todos.splice(action.index,1);
        return state;
    }
    return state;
}