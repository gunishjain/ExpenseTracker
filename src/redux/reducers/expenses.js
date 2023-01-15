import { ADD_EXPENSE, DELETE_EXPENSE, FILTER_EXPENSE } from "../actionTypes/expenses";

//Local Storage Configuration

const initialList= ()=>{
    const list=localStorage.getItem("expense-list");
    let expenses= [];
    if(list){
        expenses=JSON.parse(list);
    }
    return expenses;
}

const initialState =  {
    expenseList : initialList(),
    query: "",
};

export const expenseReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_EXPENSE:

            localStorage.setItem("expense-list",JSON.stringify([...state.expenseList,action.data]))
            return {
                ...state,
                expenseList : [...state.expenseList,action.data]
            }

        case DELETE_EXPENSE:{
            const {data} = action;
            const updatedList = state.expenseList.filter(
                (item)=>item.createdAt!==data.createdAt
            );

            localStorage.setItem("expense-list",JSON.stringify(updatedList))
            return {
                ...state,
                expenseList: updatedList
            }
        }

        case FILTER_EXPENSE: {
            const {query} = action;
            return {
                ...state,
                query,
            }
        }

        default:
            return state;
    }

}