import { START_CREATE_TUTORIAL, ERROR_CREATE_TUTORIAL } from "../types/tutorials";

export default function (state = {}, action) {

    switch (action.type) {
        case START_CREATE_TUTORIAL:
            return {
                ...state,
                payload: action.payload
            }
        case ERROR_CREATE_TUTORIAL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}