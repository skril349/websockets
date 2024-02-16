import React, { useEffect, useState } from 'react'

const BandList = ({ data }) => {

    const [bands, setbands] = useState(data);

    useEffect(()=>{
        setbands(data)
    },[data])

    const createRows = () => {
        return (
            bands.map(band => (

                <tr key = {band.id}>
                    <td>
                        <button className='btn btn-primary'> +1 </button>
                    </td>
                    <td>
                        <input className='form-control' value = {band.name} />
                    </td>
                    <td><h3>{band.votes}</h3></td>
                    <td>
                        <button className='btn btn-danger'> borrar</button>
                    </td>
                </tr>

            ))

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
