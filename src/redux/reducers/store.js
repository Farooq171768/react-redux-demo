import { combineReducers, createStore } from "redux";
import todoReducer from "./todo-reducer";

const rootReducer=combineReducers({todoos:todoReducer})


const store=createStore(rootReducer)

export default store 