import React, { useState, useEffect } from 'react';
import { getActivities, addActivityToRoutine } from '../api';
import { Link, useParams } from 'react-router-dom';


const AddActivity = (props) => {

    const { activities, setActivities } = props;
    let { routineId } = useParams();
    routineId = parseInt(routineId);
    const [activityCount, setActivityCount] = useState(null);
    const [activityDuration, setActivityDuration] = useState(null);
    const [selectedActivityId, setSelectedActivityId] = useState(null);

    let activityListSelection = document.getElementById("activityListSelection");

    const activityToAdd = {
        activityId: selectedActivityId,
        count: activityCount,
        duration: activityDuration
    }


    return (

        <div id="addActivityPage">
            <h1 id="addActivityPageTitle">ADD ACTIVITY</h1>
            <form>
                <label htmlFor="activityListSelection">Activity:</label>
                <select
                    id="activityListSelection"
                    name="activityListSelection"
                    onChange={(event) => setSelectedActivityId(event.target.value)}
                >
                    <option disabled selected> -- Select an activity -- </option>
                    {activities.map(activity => {
                        return (
                            <option id={`${activity.id}`} value={`${activity.id}`}>{`${activity.name}`}</option>
                        )
                    })}
                </select>
                <br />
                <label htmlFor="activityCount">Count: </label>
                <input
                    type='number'
                    id='activityCount'
                    name='activityCount'
                    required
                    onChange={(event) => setActivityCount(event.target.value)}
                />
                <br />
                <label htmlFor='activityDuration'>Duration: </label>
                <input
                    type='number'
                    id='activityDuration'
                    name='activityDuration'
                    required
                    onChange={(event) => setActivityDuration(event.target.value)}
                />
                <br />
                <Link to='/myRoutines'>
                    <button>Back</button>
                </Link>

                <button
                    onClick={(event) => {
                        event.preventDefault();
                        addActivityToRoutine(routineId, activityToAdd);
                    }
                    }
                >Submit</button>


            </form>






        </div>
    )





}



export default AddActivity;