import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const reducer=combineReducers({
     expenses : expenseReducer
});

const store=createStore(reducer,initialState,composeWithDevTools( ));

export default store;