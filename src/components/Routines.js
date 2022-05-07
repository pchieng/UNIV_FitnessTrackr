import React, { useEffect } from 'react';
import { getRoutines } from "../api";
import { Link } from 'react-router-dom';


const RoutinesList = (props) => {
    const { isLoggedIn, routines, setRoutines } = props;

    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines);
    }, [])

    return (
        <div id="routinesPage">
            <h1 id="routinesPageTitle">ROUTINES</h1>
            <div id='routinesList'>
                {routines.map(routine =>
                    <div className='routines' key={routine.id}>
                        <h3>{`Routine: ${routine.name}`}</h3>
                        <p>{`Goal: ${routine.goal}`}</p>
                        <p>{`Creator: ${routine.creatorName}`}</p>
                        <h4>Activities:</h4>
                        {routine.activities.map(activity =>
                            <div className='routine_activities' key={activity.id}>
                                <p>{`Name: ${activity.name}`}</p>
                                <p>{`Description: ${activity.description}`}</p>
                                <p>{`Duration: ${activity.duration}`}</p>
                                <p>{`Count: ${activity.count}`}</p>
                            </div>

                        )}

                    </div>
                )}
            </div>
        </div>



    )


}



export default RoutinesList;