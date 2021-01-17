import { ERROR_TUTORIALS, START_GET_TUTORIALS, SUCCESS_TUTORIALS, FILTER_TUTORIALS, DELETE_TUTORIALS, CREATE_TUTORIAL } from "../types/tutorials";

   const tutorials = [{
            id: 0,
            nombre: '',
            profesor: '',
            materia: '',
            fecha: '',
            materia_id: null
        }]   

export default function (state = {tutorials}, action) {

    switch (action.type) {
        case START_GET_TUTORIALS:
            return {
                ...state
            }
        case SUCCESS_TUTORIALS:
            return {
                ...state,
                tutorials: action.payload,
            }
        case ERROR_TUTORIALS:
            return {
                ...state,
                error: action.payload,
            }
        case FILTER_TUTORIALS:
            return {
                ...state,
                tutorials: [...action.payload]
            }
        case DELETE_TUTORIALS:
            return {
                ...state,
                tutorials: []
            }
        case CREATE_TUTORIAL:
            return {
                ...state,
                tutorials: [action.payload, ...state ]
            }
        default:
            return state;
    }
}