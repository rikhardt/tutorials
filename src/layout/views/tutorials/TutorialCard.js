import React from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startActiveTutorial } from '../../../redux/actions/tutorials'

export const TutorialCard = (props) => {

    const { nombre, fecha, profesor} = props

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startActiveTutorial(props))
        history.push('/detalle')
    }

    const fechaTutorial = moment(fecha).format('DD MMM yyyy');
    return (
        <div className="card" onClick={handleClick}>
            <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text"><small className="text-muted">{fechaTutorial}</small></p>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{profesor}</h6>            
            </div>
        </div>        
    )
}

