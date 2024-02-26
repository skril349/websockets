import React, { createContext, useCallback, useState } from "react"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"

export const AuthContext = createContext()


const initialState = {

    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
}


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState)
    const login = async (email, password) => {

        const resp = await fetchSinToken("login", { email, password }, "POST");
        console.log(resp.ok)
        const { usuario } = resp
        if (resp.ok) {
            localStorage.setItem('token', resp.token)
            setAuth({

                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
            })
        }
        return resp.ok
    }

    const register = async (nombre, email, password) => {
        const resp = await fetchSinToken("login/new", { nombre, email, password }, "POST");
        console.log(resp)
        const { usuario, token } = resp
        if (usuario) {
            localStorage.setItem('token', token)
            setAuth({

                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
            })
            return true
        }
        return resp.msg
    }

    const verificarToken = useCallback(async() => {

        const token = localStorage.getItem('token')

        if (!token) {
             setAuth({

                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            })
            return false
        }

        const resp = await fetchConToken('login/renew')
        const { usuario } = resp

        if(resp.ok){
            localStorage.setItem('token', resp.token)
            setAuth({

                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.name,
                email: usuario.email,
            })
            return true
        }else{
             setAuth({

                uid: null,
                checking: false,
                logged: false,
                name: null,
                email:null,
            })
            return false

        }
        

    }, [])

    const logOut = () => {

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificarToken,
            logOut,

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
