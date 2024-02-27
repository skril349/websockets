import { types } from "../../types/types";



export const chatReducer = (state,action) =>{

    console.log(action)
    switch (action.type) {
       case types.usuariosCargados:
            return{
                ...state,
                usuarios:[...action.payload]
            }
    
        default:
            return state;
    }
}