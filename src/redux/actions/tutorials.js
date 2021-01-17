import { START_GET_TUTORIALS,
         SUCCESS_TUTORIALS, 
         ERROR_TUTORIALS, 
         START_SEARCH_TUTORIALS, 
         START_DELETE_TUTORIALS, 
         START_CREATE_TUTORIAL, 
         START_ACTIVE_TUTORIAL} from "../types/tutorials";


export const startGetTutorials = () => ({
    type: START_GET_TUTORIALS
})

export const successTutorials = (payload) => ({
    type: SUCCESS_TUTORIALS,
    payload
})

export const errorTutorials = (payload) => ({
    type: ERROR_TUTORIALS,
    payload
})


export const startSearchTutorials = (payload) => ({
    type: START_SEARCH_TUTORIALS,
    payload
})

export const startDeleteTutorials = () => ({
    type: START_DELETE_TUTORIALS
})


export const startCreateTutorial = (payload) => ({
    type: START_CREATE_TUTORIAL,
    payload
})

export const startActiveTutorial = (payload) => ({
    type: START_ACTIVE_TUTORIAL,
    payload
})