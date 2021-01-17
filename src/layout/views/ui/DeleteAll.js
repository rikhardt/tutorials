import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteTutorials } from '../../../redux/actions/tutorials';

export const DeleteAll = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startDeleteTutorials())
    }

    return (
        <div className="row mb-3 col-6 mx-auto">
            <button 
                type="button" 
                className="btn btn-outline-primary text-uppercase"
                onClick={handleClick}
            >
                Eliminar Todos
            </button>
        </div>
    )
}
