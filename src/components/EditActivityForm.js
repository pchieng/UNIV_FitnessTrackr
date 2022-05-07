import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';




const EditActivity = (props) => {

console.log('test')
    const { activities, setActivities } = props;
    const { routineId, activityId } = useParams;
console.log(activities)
    console.log(routineId, activityId)


    const [activityToEdit] = activities.filter(activity => activity.id === activityId);
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState('');
    console.log(activityToEdit)

    return (

<div id='editActivityPage'>
        <h1 id='editActivityPageTitle'>EDIT ACTIVITY</h1>
        <p>{`Name: ${activityToEdit.name}`}</p>
        {/* <p>{`Description: ${activityToEdit.description}`}</p> */}
        <form>
        <label htmlFor='activityDuration'>Duration: </label>
        <input
            type='number'
            id='activityDuration'
            name='activityDuration'
            // onChange={(event) => {setDuration(event.target.value)}}
            />




        </form>





</div>


    )



}




export default EditActivity;