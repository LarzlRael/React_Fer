import { types } from "../types/types";

const initialState = {
    modalOpen: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.isOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.isCloseModal:
            return {
                ...state,
                modalOpen: false
            }
        default:
            return state;
    }
}