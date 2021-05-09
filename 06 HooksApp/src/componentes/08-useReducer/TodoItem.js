import React from 'react'
import { TodoList } from './TodoList'

export const TodoItem = ({ todos, handleDelete, handleToogle }) => {
    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
                <TodoList
                    key={todo.id}
                    index={i}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleToogle={handleToogle}
                />
            ))}
        </ul>
    )
}
