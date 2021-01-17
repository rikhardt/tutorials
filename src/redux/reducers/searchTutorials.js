import { START_SEARCH_TUTORIALS, ERROR_SEARCH_TUTORIALS } from "../types/tutorials";

   const tutorials = [{
            id: 0,
            nombre: '',
            profesor: '',
            materia: '',
            fecha: '',
        }]   

export default function (state = {tutorials}, action) {

    switch (action.type) {
    
        case START_SEARCH_TUTORIALS:
            return {
                ...state
            }
        case ERROR_SEARCH_TUTORIALS:
            return {
                ...state,
                error: action.payload,
            }
            
        default:
            return state;
    }
}