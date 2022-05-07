import React, { useState, useEffect } from 'react';
import { getActivities, addActivityToRoutine } from '../api';
import { Link } from 'react-router-dom';


const AddActivity = (props) => {
    const { activities, setActivities } = props;
    const routineId = parseInt(location.pathname.slice(13));
    const [activityCount, setActivityCount] = useState(null);
    const [activityDuration, setActivityDuration] = useState(null);
    const [selectedActivityId, setSelectedActivityId] = useState(null);

    let activityListSelection = document.getElementById("activityListSelection");

    const activityToAdd = {
        activityId: selectedActivityId,
        count: activityCount,
        duration: activityDuration
    }

    useEffect(async () => setActivities(await getActivities()), []);

    for (let i = 0; i < activities.length; i++) {
        const activityName = activities[i].name;
        const activityId = activities[i].id;
        let option = document.createElement("option");
        option.text = activityName;
        option.value = activityId;
        option.id = activityId;
        activityListSelection.add(option);
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