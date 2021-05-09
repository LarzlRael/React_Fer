import React from 'react'
import './styles.css';


export const TodoList = ({ index, todo: { id, desc, done }, handleToogle, handleDelete }) => {

    return (
        <li
            className="list-group-item"
            key={id}>

            <p className={`${done && 'completed'}`}
                onClick={() => handleToogle(id)}>
                {index + 1}
                {desc}
            </p>

            <button
                type="button"
                onClick={() => handleDelete(id)}
                className="btn btn-danger">Delete
            </button>
        </li>
    )
}
