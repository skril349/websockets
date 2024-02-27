import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/AuthContext';
import { chatReducer } from './chat/chatReducer';
import { ChatContext } from './chat/ChatContext';
import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const {dispatch} = useContext(ChatContext)
    const {auth} = useContext(AuthContext)

    const { socket, online, conectarSocket,desconectarSocket } = useSocket('http://localhost:8080');

    useEffect(()=>{
        if(auth.logged){
            conectarSocket()
        }
    },[auth,conectarSocket])

    useEffect(()=>{
        if(!auth.logged){
            desconectarSocket()
        }
    },[auth,desconectarSocket])

    useEffect(()=>{
        socket?.on("lista-usuarios",(usuarios)=>{
            dispatch({
                type:types.usuariosCargados,
                payload:usuarios
            })
        })
    },[socket, dispatch])

    useEffect(()=>{
        socket?.on("mensaje-personal",(mensaje)=>{
            console.log(mensaje)
        })
    },[socket])
    
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}