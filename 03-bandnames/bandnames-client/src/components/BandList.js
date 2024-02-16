import React from 'react'

const BandList = () => {
    const createRows = () =>{
        return (
            <tr>
                <td>
                    <button className='btn btn-primary'> +1 </button>
                </td>
                <td>
                    <input className='form-control'/>
                </td>
                <td><h3>15</h3></td>
                <td>
                    <button className='btn btn-danger'> borrar</button>
                </td>
            </tr>
        )
    }
  return (
    <>
      <table className='table table-stripped'>
        <thead>
            <tr>
                <th></th>
                <th>Nombre</th>
                <th>Votos</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
            {createRows()}
        </tbody>
      </table>
    </>
  )
}

export default BandList
