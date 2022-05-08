import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editActivity, deleteActivity } from '../api';
import { Link } from 'react-router-dom';

const EditActivity = (props) => {
    const { activities } = props;

    const location = useLocation();
    const activitiyId = parseInt(location.pathname.slice(13));
    const [activityToEdit] = activities.filter(activity => activity.id === activitiyId);
    const [activityName, setActivityName] = useState(activityToEdit.name);
    const [activityDescription, setActivityDescription] = useState(routineToEdit.goal);



    const newActivity = {
        name: activityName,
        description: activityDescription,
    }

    return (

        <div id="editActivityPage">
            <h1 id="editActivityPageTitle">EDIT ACTIVITY</h1>
            <form>
                <label htmlFor='activityName'>Activity Name: </label>
                <input
                    type='text'
                    id='activityName'
                    name='activityName'
                    placeholder={activityToEdit.name}
                    onChange={(event) => setActivityName(event.target.value)}
                />
                <br />
                <label htmlFor='activityDescription'>Activity Description: </label>
                <input
                    type='text'
                    id='activityDescription'
                    name='activityDescription'
                    placeholder={activityToEdit.goal}
                    onChange={(event) => setActivityDescription(event.target.value)}
                />
                <br />
            </form>
            <br/>
            <span>
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const deletedActivity = await deleteActivity(activityId);
                    console.log(deletedActivity);
                }}
            >
                Delete Activity
            </button>
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const updatedActivity = await editActivity(activitiyId, newActivity);
                    console.log(updatedActivity)
                }}
                >
                Submit Changes
            </button>
            </span>
            <br/>
            <Link to='/myroutines'>
            <button>Back</button>
            </Link>

            <div id="activityToEdit">
                <h3 id="activityName">{`Activity: ${activityToEdit.name}`}</h3>
                <p>{`Description: ${activityToEdit.description}`}</p>
                <p>{`Creator: ${activityToEdit.creatorName}`}</p>
                <h4>Activities:</h4>
                {activityToEdit.activities ?
                    activityToEdit.activities.map(activity =>
                        <div className='routine_activities' key={activity.id}>
                            <p>{`Name: ${activity.name}`}</p>
                            <p>{`Description: ${activity.description}`}</p>
                            <p>{`Duration: ${activity.duration}`}</p>
                            <p>{`Count: ${activity.count}`}</p>
                        </div>
                    )
                    :
                    null
                }

            </div>
        </div>



    )


}


export default EditActivity;