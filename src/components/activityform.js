import React, { useState } from 'react';
import { createNewActivity } from '../api';
import { Link } from 'react-router-dom';

const ActivityForm = (props) => {


    const { activities, setActivities } = props;
    const [ activityName, setActivityName ] = useState('');
    const [ activityDescription, setActivityDescription ] = useState('');

    let newActivity = {
        name: activityName,
        description: activityDescription
    }


    return (
        <>
            <h1 className="newActivity">Create a New Activity</h1>
            <form id='activityForm' className='newActivity'>
                <label htmlFor='newActivityName'>Activity Name: </label>
                <input
                    type='text'
                    id='newActivityName'
                    name='newActivityName'
                    onChange={(event) => { setActivityName(event.target.value) }}
                    required
                />
                <br />
                <label htmlFor='newActivityDescription'>Activity Description: </label>
                <input
                    type='text'
                    id='newActivityDescription'
                    name='newActivityDescription'
                    onChange={(event) => { setActivityDescription(event.target.value) }}
                />
                <br />
                <Link to='/activities'>
                    <button
                        onClick={async (event) => {
                            event.preventDefault();
                            const activityToAdd = await createNewActivity(newActivity);
                            setActivities([...activities, activityToAdd]);
                            document.getElementById('newActivityName').value = '';
                            document.getElementById('newActivityDescription').value = '';
                        }}
                    >Submit</button>
                </Link>

            </form>



        </>






    )



}




export default ActivityForm;