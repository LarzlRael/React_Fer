import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd';

import './styles.css';



const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender React',
    //     done: false
    // }]

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    // use reducer, 1er parameter==> the reducer
    // 2 parameter, the initialState

    // the todos and the dispatch for to send the action to reducer
    const [todos, dispatch] = useReducer(todoReducer, [], init);



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    // delete function

    const handleDelete = (todoId) => {
        //Crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action);
    }

    const handleToogle = (todoId) => {

        //dispatch
        dispatch({
            type: 'toogle',
            payload: todoId
        });
    }


    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos */}
                    {/* <ul className="list-group list-group-flush">
                        {todos.map((todo, i) => (
                             // TodoItem, todo, index, handleDelete, handleTootle
                            <li
                                className="list-group-item"
                                key={todo.id}
                            >
                                <p className={`${todo.done && 'completed' }`}
                                    onClick={() => handleToogle(todo.id)}>
                                    {i + 1} {todo.desc}
                                </p>

                                <button
                                    type="button"
                                    className="btn btn-primary">
                                    Borrar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(todo.id)}
                                    className="btn btn-danger">Delete
                                </button>
                            </li>
                        ))}

                    </ul> */}

                    <TodoItem
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToogle={handleToogle}
                    />

                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={handleAddTodo} />

                </div>
            </div>
        </div>
    )

}