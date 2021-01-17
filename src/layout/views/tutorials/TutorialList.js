import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { TutorialCard } from './TutorialCard';


export const TutorialList = () => {
    const {tutorials} = useSelector( state => state.tutorials, shallowEqual );
    return (
        <div className="mb-3 animate__animated animate__fadeIn">
            {
                tutorials.map(tutorial => (
                   <TutorialCard key={tutorial.id} 
                        {...tutorial}                        
                   />                  
                ))
            }
        </div>
    )
}
