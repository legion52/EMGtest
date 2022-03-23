import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import { initState } from "./initState";


export const store = createStore(rootReducer, initState, applyMiddleware(thunk))
