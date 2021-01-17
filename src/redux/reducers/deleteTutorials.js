import { ERROR_DELETE_TUTORIALS, START_DELETE_TUTORIALS } from "../types/tutorials";

   const tutorials = [{
            id: 0,
            nombre: '',
            profesor: '',
            materia: '',
            fecha: '',
        }]   

export default function (state = {tutorials}, action) {

    switch (action.type) {
        case START_DELETE_TUTORIALS:
            return {
                ...state
            }
        case ERROR_DELETE_TUTORIALS:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}