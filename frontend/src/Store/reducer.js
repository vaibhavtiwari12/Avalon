import { combineReducers } from "redux";
import {connectRouter } from 'connected-react-router';
import fetchDataReducer from "./fetchDataReducer";
import BlogReducer from "../Components/Blog/BlogReducer";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    fetchDataReducer,
    BlogReducer
})

export default createRootReducer;