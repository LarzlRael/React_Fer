const initialState = [{
    id: 1,
    todo: 'Comprar Pan ',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if (action?.type == 'agregar') {
        return [...state,action.payload]
    }
    return state
}

let todos = todoReducer();

// dont use the pusb in state arrays in react

const newTodo = {
    id: 1,
    todo: 'Comprar Pan ',
    done: false
};

const agregatTodoAction = {
    type: 'agregar',
    payload: newTodo
}
todos = todoReducer(todos, agregatTodoAction);

console.log(todos);

