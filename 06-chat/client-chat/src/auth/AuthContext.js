import React, {Children, createContext, useCallback, useState} from "react"

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
    const login = (email,password) =>{

    }

    const register = (nombre,email,password)=>{

    }

    const verificarToken = useCallback( ()=>{

    },[] )

    const logOut = () =>{

    }

  return (
    <AuthContext.Provider value={{
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