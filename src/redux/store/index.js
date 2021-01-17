import {createStore, applyMiddleware} from 'redux';
import saga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import sagas from '../sagas';


const sagaMiddleware = saga();
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)

export{store};