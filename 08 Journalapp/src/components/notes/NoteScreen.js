import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleteting } from '../actions/notes';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {


    const { active: note } = useSelector(state => state.notes);

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(note);

    const { body, title, id } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id != activeId.current) {
            reset(note);
            activeId.current = note.id
        }

    }, [note, reset]);

    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }));

    }, [formValues]);

    const handleDelete = () => {
        dispatch(startDeleteting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="what happend today"
                    className="notes__textarea"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen" />
                    </div>
                }

            </div>
            <button
                onClick={handleDelete}
                className="btn btn-danger">
                Delete
            </button>
        </div>
    )
}
