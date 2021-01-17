import {combineReducers} from 'redux';
import tutorials from './tutorials';
import searchTutorials from './searchTutorials'
import createTutorial from './createTutorial'
import deleteTutorials from './deleteTutorials'
import activeTutorial from './activeTutorial'

export default combineReducers({
    tutorials,
    searchTutorials,
    createTutorial,
    deleteTutorials,
    activeTutorial,  
})