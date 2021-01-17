import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const DetailTutorial = () => {
    
    const location = useLocation();

    const {activa} = useSelector( state => state.activeTutorial );
       
    const [values] = useState(activa)

    const {nombre, profesor, materia, fecha } = values

    return (

        <div className="row mb-3">
            <form>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input 
                        name="nombre" 
                        type="text" 
                        className="form-control" 
                        disabled
                        value={nombre}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Profesor</label>
                    <input 
                        name="profesor" 
                        type="text" 
                        className="form-control" 
                        disabled
                        value={profesor}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Materia</label>
                    <input 
                        name="materia" 
                        type="text" 
                        className="form-control" 
                        disabled 
                        value={materia}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input 
                        name="fecha" 
                        type="text" 
                        className="form-control" 
                        disabled 
                        value={fecha}
                    />
                </div>

            </form>

        </div>

    )
}
