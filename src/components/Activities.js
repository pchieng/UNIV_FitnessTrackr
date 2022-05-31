import React, { useEffect } from 'react';
import { getActivities } from '../api';
import { Link } from 'react-router-dom';

const ActivitiesList = (props) => {

    const { isLoggedIn, activities, setActivities } = props;
    useEffect(async () => setActivities(await getActivities()), []);

    console.log('test',isLoggedIn)

    async function handleDeleteActivity(id) {
        const newActivity = activities.filter(activity => activity.id !== id);
        setActivities(newActivity);
    }

    return (
        <div id="activitiesPage">
            <h1 id="activitiesPageTitle">ACTIVITIES</h1>
            {isLoggedIn ?
            <Link to='/createActivity'>
                <button id='newActivityButton'>Create New Activity</button>
            </Link>
            :
            null        
        }
            <div id='activitiesList'>
                {activities.map(activity =>
                    <div className='activities' key={activity.id}>
                        <h3>{`Activity: ${activity.name}`}</h3>
                        <p>{`Description: ${activity.description}`}</p>
                        <button type='button' className='deletebtn'
                        onClick={() => handleDeleteActivity(activity.id)}>Remove Activity</button>
                    </div>
                )}
            </div>
        </div>
    )
}


export default ActivitiesList;