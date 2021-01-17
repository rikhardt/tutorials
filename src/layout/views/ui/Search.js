import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startSearchTutorials } from '../../../redux/actions/tutorials';


export const Search = () => {

    const dispatch = useDispatch();
    const [values, setValues] = useState({
        searchText: ''
    });

    const {searchText} = values;

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(startSearchTutorials(searchText))
    };

    return (
        <form className="row mb-3" onSubmit={handleSearch}>

            <div className="input-group" >
                
                <input
                    name='searchText'
                    type="text"
                    placeholder="Buscar por título"
                    className="form-control"
                    autoComplete="off"                                        
                    onChange={handleInputChange}

                />
        
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSearch}

                >
                    Buscar
                </button>
            </div>
        </form>
    )
}
