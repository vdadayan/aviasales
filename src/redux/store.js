import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {getTicketsReducer} from "./reducers/ticketsReducer";

const rootReducer = combineReducers({
    tickets: getTicketsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store;