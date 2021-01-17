import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { startCreateTutorial } from '../../../redux/actions/tutorials';

export const AddNewTutorial = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [values, setValues] = useState({
        nombre: '',
        profesor: '',
        materia: '',
        fecha: ''
    })

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClick = (e) => {
        e.preventDefault()        
        dispatch(startCreateTutorial(values))
        history.push('/')
    }

    return (

        <div className="row mb-3">
            <form>
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input name="nombre" type="text" className="form-control" required onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Profesor</label>
                    <input name="profesor" type="text" className="form-control" required onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Materia</label>
                    <input name="materia" type="text" className="form-control" required onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input name="fecha" type="text" className="form-control" required onChange={handleInputChange} />
                </div>


                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-primary text-uppercase"
                        type="submit"
                        onClick={handleClick}
                    >
                        Agregar
                     </button>
                </div>

            </form>

        </div>

    )
}
