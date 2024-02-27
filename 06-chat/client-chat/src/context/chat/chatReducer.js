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
            if(state.chatActivo === action.payload) return state;
            return {
                ...state,
                chatActivo:action.payload,
                mensajes:[]
            }
        case types.nuevoMensaje:
            if(state.chatActivo === action.payload.de || state.chatActivo === action.payload.para){
                return{
                    ...state,
                    mensajes:[...state.mensajes,action.payload]
                }
            }else{
                return state
            }

    
        default:
            return state;
    }
}