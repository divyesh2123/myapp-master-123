import {createStore, applyMiddleware, compose} from 'redux'
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer/rootReducer";
import { thunk } from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,applyMiddleware(thunk));

export default store;