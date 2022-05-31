import React, { useEffect } from 'react';
import { getRoutines } from "../api";
import { getActivities } from "../api";


const RoutinesList = (props) => {
    const { routines, setRoutines, setActivities } = props;

    useEffect(async () => {
        const routines = await getRoutines();
        setRoutines(routines);
    }, [])
    
    async function handleDeleteActivity(id) {
        const activities = await getActivities();
        const newActivity = activities.filter(activity => activity.id !== id);
        setActivities(newActivity);
    }

    console.log(routines)


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
                                <button type='button' className='deletebtn'
                                onClick={() => handleDeleteActivity(activity.id)}>Remove Activity</button>
                            </div>

                        )}

                    </div>
                )}
            </div>
        </div>



    )


}



export default RoutinesList;