import React from 'react'

export const OrderByTitleSelected = () => {
    return (

        <form className="row mb-3 d-flex justify-content-end">            
            <div className="col-auto">
                <p className="text-muted">Ordenado por</p>
            </div>
            <div className="col-auto" >
                <select className="form-select form-select-sm">
                    <option defaultValue>Titulo</option>
                    <option value="1">Fecha</option>
                </select>
            </div>

        </form>
    )
}
