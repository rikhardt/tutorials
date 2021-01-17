import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Navbar } from '../layout/home/Navbar';
import { AddNewTutorial } from '../layout/views/ui/AddNewTutorial';
import { Tutorials } from '../layout/views/Tutorials';
import { useDispatch } from 'react-redux';
import { startGetTutorials } from '../redux/actions/tutorials';
import { DetailTutorial } from '../layout/views/ui/DetailTutorial';


export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch();
    const [changeTitle, setChangeTitle] = useState('Tutoriales')
    const history = useHistory()

    useEffect(() => {
        dispatch(startGetTutorials())
        setChecking(false)
    }, [dispatch, setChecking])


    const handleChangeTitle = () => {
        console.log('window.location.pathname: ' + window.location.pathname)
        switch (window.location.pathname) {
            case 'agregar':
                return setChangeTitle('Agregar tutorial')        
            default:
                return 
        }       
    }

    useEffect(() => {
        handleChangeTitle()
    })

    if (checking) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

   

    return (
        <Router>

            <Navbar titulo={changeTitle} />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/agregar" component={AddNewTutorial}  />
                    <Route exact path="/detalle" component={DetailTutorial}  />
                    <Route exact path="/home" component={Tutorials} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}
