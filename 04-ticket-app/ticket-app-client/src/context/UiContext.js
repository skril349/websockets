import React, {useState, createContext} from 'react'

export const UiContext = createContext();

export const UiProvider = ({children}) => {

    const [ocultarMenu, setOcultarMenu] = useState(false)
    const showMenu = ()=>{
        setOcultarMenu(false)
    }

    const HideMenu = ()=>{
        setOcultarMenu(true)
    }
    
    
  return (
    <UiContext.Provider value={{
        ocultarMenu,
        showMenu,
        HideMenu
    }}>
        {children}
    </UiContext.Provider>
  )
}

