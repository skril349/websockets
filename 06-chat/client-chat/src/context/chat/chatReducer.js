import { types } from "../../types/types";



export const chatReducer = (state,action) =>{

    console.log(action)
    switch (action.type) {
       case types.usuariosCargados:
            return{
                ...state,
                usuarios:[...action.payload]
            }
        case types.activarChat:
            return {
                ...state,
                chatActivo:action.payload
            }
    
        default:
            return state;
    }
}