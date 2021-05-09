import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }

        const newtTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        handleAddTodo(newtTodo);
        reset();
        
    }

    return (
        <>
            <h4>Agregar TODO</h4>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="aprender"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">
                    Agregar
                </button>
            </form>


        </>
    )
}
