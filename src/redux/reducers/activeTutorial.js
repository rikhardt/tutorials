import { START_ACTIVE_TUTORIAL } from "../types/tutorials";

   const tutorials = [{
            id: 0,
            nombre: '',
            profesor: '',
            materia: '',
            fecha: '',
        }]   

export default function (state = {tutorials}, action) {

    switch (action.type) {
        case START_ACTIVE_TUTORIAL:
            return {
                ...state,
                activa: action.payload
            }
        default:
            return state;
    }
}