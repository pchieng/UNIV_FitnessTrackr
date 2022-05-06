import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editRoutine } from '../api';

const EditRoutine = (props) => {
    const { routines } = props;

    const location = useLocation();
    const routineId = parseInt(location.pathname.slice(13));
    const [routineToEdit] = routines.filter(routine => routine.id === routineId);
    const [routineName, setRoutineName] = useState(routineToEdit.name);
    const [routineGoal, setRoutineGoal] = useState(routineToEdit.goal);
    const [routineIsPublic, setRoutineIsPublic] = useState(routineToEdit.isPublic);



    const newRoutine = {
        name: routineName,
        goal: routineGoal,
        isPublic: routineIsPublic
    }


    console.log(newRoutine)
    return (

        <div id="editRoutinePage">
            <h1 id="editRoutinePageTitle">Edit Routine</h1>
            <form>
                <label htmlFor='routineName'>Routine Name: </label>
                <input
                    type='text'
                    id='routineName'
                    name='routineName'
                    placeholder={routineToEdit.name}
                    onChange={(event) => setRoutineName(event.target.value)}
                />
                <br />
                <label htmlFor='routineGoal'>Routine Goal: </label>
                <input
                    type='text'
                    id='routineGoal'
                    name='routineGoal'
                    placeholder={routineToEdit.goal}
                    onChange={(event) => setRoutineGoal(event.target.value)}
                />
                <br />
                <label htmlFor='routineIsPublic'>Visible to Public: </label>
                <input
                    type='checkbox'
                    id='routineIsPublic'
                    name='routineIsPublic'
                    value={routineToEdit.isPublic}
                    onChange={(event) => setRoutineIsPublic(event.target.value)}
                />
            </form>
            <br/>
            <span>
            <button>
                Delete Routine
            </button>
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const updatedRoutine = await editRoutine(routineId, newRoutine);
                    console.log(updatedRoutine)
                }}
                >
                Submit Changes
            </button>
   
            </span>

            <div id="routineToEdit">
                <h3 id="routineName">{`Routine: ${routineToEdit.name}`}</h3>
                <p>{`Goal: ${routineToEdit.goal}`}</p>
                <p>{`Creator: ${routineToEdit.creatorName}`}</p>
                <h4>Activities:</h4>
                {routineToEdit.activities ?
                    routineToEdit.activities.map(activity =>
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


export default EditRoutine;