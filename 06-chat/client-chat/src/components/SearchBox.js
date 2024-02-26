import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

const SearchBox = () => {

    const {auth, logOut} = useContext(AuthContext)
    console.log(auth)
  return (
      <div className="headind_srch">
      <div className="recent_heading mt-2">
          <h4>{auth.name}</h4>
      </div>
      <div className="srch_bar">
          <div className="stylish-input-group">
              <button className="btn text-danger"
              onClick={logOut}>
                  Salir
              </button>
          </div>
      </div>
  </div>
  )
}

export default SearchBox
