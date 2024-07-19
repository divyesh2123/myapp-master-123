import {createStore, applyMiddleware, compose} from 'redux'
import counterReducer from "../reducer/counterReducer";
import rootReducer from "../reducer/rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,composeEnhancers(applyMiddleware()));

export default store;