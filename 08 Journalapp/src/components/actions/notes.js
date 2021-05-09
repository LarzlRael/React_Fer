import Swal from 'sweetalert2';

import { db } from "../../firebase/firebase-Config";
import { fileUpload } from '../../herpers/fileUpload';
import { loadNotes } from "../../herpers/loadNotes";
import { types } from "../../types/types";

export const startNewNote = () => {
    return async (dispatch, getState) => {


        const { uid } = getState().auth;


        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));



    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {

        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));

    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);

        dispatch(refreshNote(note.id, noteToFireStore));
        Swal.fire('Saved', note.title, 'success');
    }
}
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, note: {
            id,
            ...note
        }
    }
})


//react-journal
// https://api.cloudinary.com/v1_1/daij4l3is/upload

export const startUploading = (file) => {


    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;


        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));

        Swal.close();

    }
}

export const startDeleteting = (id) => {
    return async (dispatch, getState) => {
        try {
            const uid = getState().auth.uid;
            await db.doc(`${uid}/journal/notes/${id}`).delete();

            dispatch(deleteNote(id));
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const notesLogout = () => ({
    type: types.notesLogoutCleaning
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})