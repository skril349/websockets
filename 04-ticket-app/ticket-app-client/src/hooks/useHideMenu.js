import  { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

export const useHideMenu = ( ocultar ) => {

    const {showMenu, HideMenu} = useContext(UiContext)
    useEffect(()=>{
        if(ocultar){
            HideMenu()
        }else{
            showMenu()
        }
    },[ocultar, HideMenu, showMenu])

}

