import React, {useState, useEffect} from 'react';
import { getActivities } from '../api';


const AddActivity = (props) => {
    const { activities, setActivities } = props;

    useEffect(async () => setActivities(await getActivities()), []);
    const [selectedActivity, setSelectedActivity] = useState('');

    
    let activityListSelection = document.getElementById("activityListSelection");
    console.log('test',activityListSelection);


    for (let i = 0; i < activities.length; i++) {
        const activityName = activities[i].name;
        const activityId = activities[i].id;
        let option = document.createElement("option");
        option.text = activityName;
        option.value = activityName;
        option.id = activityId;
        activityListSelection.add(option);
    }

    return (

        <div id="addActivityPage">
            <h1 id="addActivityPageTitle">ADD ACTIVITY</h1>
            <form>
                <label htmlFor="activityListSelection">Select an activity:</label>
                <select
                    id="activityListSelection"
                    name="activityListSelection"
                ></select>
                <button
                onClick={(event) => {
                    event.preventDefault();
console.log(document.getElementById('activityListSelection'))



                }
                }




                >Submit</button>


            </form>






        </div>
    )





}



export default AddActivity;