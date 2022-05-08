import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { editRoutineActivity, deleteRoutineActivity} from '../api';



const EditActivity = (props) => {
    const { activities, setActivities, routines, setRoutines } = props;
    let { routineId, activityId } = useParams();
    routineId = parseInt(routineId);
    activityId = parseInt(activityId);

    const [duration, setDuration] = useState('');
    const [count, setCount] = useState('');
    const [routineToEdit] = routines.filter(routine => routine.id === routineId);
    const [routineActivityToEdit] = routineToEdit.activities.filter(activity => activity.id === activityId)
    const routineActivityIdToEdit = routineActivityToEdit.routineActivityId;

    const newRoutineActivityInfo = {
        count: count,
        duration: duration
    }


    return (

        <div id='editActivityPage'>
            <h1 id='editActivityPageTitle'>EDIT ACTIVITY</h1>
            <p>{`Name: ${routineActivityToEdit.name}`}</p>
            <p>{`Description: ${routineActivityToEdit.description}`}</p>
            <form>
                <label htmlFor='activityDuration'>Duration: </label>
                <input
                    type='number'
                    id='activityDuration'
                    name='activityDuration'
                    onChange={(event) => { setDuration(event.target.value) }}
                />
                <br />
                <br />
                <label htmlFor='activityCount'>Count: </label>
                <input
                    type='number'
                    id='activityCount'
                    name='activityCount'
                    onChange={(event) => { setCount(event.target.value) }}
                />
                <br />
                <br />
                         
                <button 
                    id='removeActivityButton'
                    onClick={(event) => {
                        event.preventDefault();
                        deleteRoutineActivity(routineActivityIdToEdit);
                    }}
                    
                    >Remove Activity</button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            editRoutineActivity(routineActivityIdToEdit, newRoutineActivityInfo);
                        }}
                    > Submit </button>
                    <br/>
                    <br/>
                    <Link to='/myRoutines'>
                    <button>Back</button>
                </Link>       
            </form>




        </div>


    )



}




export default EditActivity;