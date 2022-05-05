import React, { useEffect } from 'react';
import { getActivities } from '../api';


const ActivitiesList = (props) => {

    const { activities, setActivities } = props;
    useEffect(async () => setActivities(await getActivities()), []);

    return (
        <div id='activitiesList'>
            {activities.map(activity =>
                <div className='activities' key={activity.id}>
                    <h3>{`Activity: ${activity.name}`}</h3>
                    <p>{`Description: ${activity.description}`}</p>
                </div>
            )}
        </div>
    )
}


export default ActivitiesList;