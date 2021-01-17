import React from 'react'
import { useHistory } from 'react-router-dom'
import { TutorialList } from './tutorials/TutorialList'
import { AddNewTutorial } from './ui/AddNewTutorial'
import { DeleteAll } from './ui/DeleteAll'
import { OrderByTitleSelected } from './ui/OrderByTitleSelected'
import { Search } from './ui/Search'

export const Tutorials = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/agregar')
    }


    return (
        <div className="container">
            <Search />
            <OrderByTitleSelected />
            <TutorialList />
            <DeleteAll />

            <button
                className="btn btn-primary fab"
                onClick={handleClick}
            >
                <i className="fas fa-plus"></i>

            </button>

        </div>
    )
}
