import React, { useState, useEffect } from 'react';
import { getUserData } from './api';

const RoutinesList = () => {



    const [userData, setUserData] = useState([]);
    useEffect(async () => setUserData(await getUserData()), []);

    return (
        <div>
            {userData.map(routine =>
                <div className='routines' key={routine.id}>
                    <h3>{`Routine: ${routine.name}`}</h3>
                    <p>{`Goal: ${routine.goal}`}</p>
                    <p>{`Creator: ${routine.creatorName}`}</p>
                            
                        
                </div>



            )}


        </div>



    )


}