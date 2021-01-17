import { call, put, takeLatest } from "redux-saga/effects";
import { apiCreateTutorial, apiDeleteTutorials, apiGetTutorials, apiSearchTutorials } from "../../api/tutorials";
import { successTutorials } from "../actions/tutorials";
import { START_GET_TUTORIALS,
         ERROR_TUTORIALS, 
         START_SEARCH_TUTORIALS, 
         ERROR_SEARCH_TUTORIALS, 
         FILTER_TUTORIALS, 
         ERROR_DELETE_TUTORIALS, 
         DELETE_TUTORIALS, 
         START_DELETE_TUTORIALS, 
         START_CREATE_TUTORIAL,
         ERROR_CREATE_TUTORIAL,
         CREATE_TUTORIAL} from "../types/tutorials";


export function* getTutorials() {
    try {
        const data = yield call(apiGetTutorials);           
        if (data !== null) {
            yield put(successTutorials(data))
        }                 
    } catch (error) {
        yield put({type: ERROR_TUTORIALS, payload: error})
    }
}


export function* searchTutorials(action) {
    try {
        const data = yield call(apiSearchTutorials, action.payload);
        if (data !== null) {
            yield put({
                type: FILTER_TUTORIALS,
                payload: data
            })
        }                 
    } catch (error) {
        yield put({type: ERROR_SEARCH_TUTORIALS, payload: error})
    }
}

export function* deleteTutorials() {
    try {
        const data = yield call(apiDeleteTutorials);
        if (data !== null) {
            yield put({ type: DELETE_TUTORIALS})
        }                 
    } catch (error) {
        yield put({type: ERROR_DELETE_TUTORIALS, payload: error})
    }
}

export function* createTutorial(action) {
    try {
        const data = yield call(apiCreateTutorial, action.payload );
        if (data !== null) {
            console.log('CREATE_TUTORIAL: ' + JSON.stringify(data))
            yield put({ type: CREATE_TUTORIAL, payload: data})
        }                 
    } catch (error) {
        console.log('ERROR_CREATE_TUTORIAL: ' + JSON.stringify(error))
        yield put({type: ERROR_CREATE_TUTORIAL, payload: error})
    }
}

export default function* watchTutorials() {
    yield takeLatest(START_GET_TUTORIALS, getTutorials);
    yield takeLatest(START_SEARCH_TUTORIALS, searchTutorials);
    yield takeLatest(START_DELETE_TUTORIALS, deleteTutorials);
    yield takeLatest(START_CREATE_TUTORIAL, createTutorial);
}