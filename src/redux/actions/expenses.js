import { ADD_EXPENSE, DELETE_EXPENSE, FILTER_EXPENSE } from "../actionTypes/expenses";

export const addExpense=(data)=>{
    return {
        type: ADD_EXPENSE,
        data,
    };
}

export const deleteExpense=(data)=>{
    return {
        type: DELETE_EXPENSE,
        data,
    };
}

export const filterExpense=(query)=>{
    return {
        type: FILTER_EXPENSE,
        query,
    };
}