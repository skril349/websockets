import React, { createContext, useCallback, useState} from "react"
import { fetchSinToken } from "../helpers/fetch"

export const AuthContext = createContext()


const initialState = {

    uid:null,
    checking:true,
    logged:false,
    name:null,
    email:null,
}


const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(initialState)
    const login = async(email,password) =>{

        const resp =await fetchSinToken("login", {email,password},"POST");
        console.log(resp.ok)
        const {usuario} = resp
        if(resp.ok){
            localStorage.setItem('token',resp.token)
            setAuth({

                uid:usuario.uid,
                checking:false,
                logged:true,
                name:usuario.name,
                email:usuario.email,
            })
        }
        return resp.ok
    }

    const register = (nombre,email,password)=>{

    }

    const verificarToken = useCallback( ()=>{

    },[] )

    const logOut = () =>{

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
