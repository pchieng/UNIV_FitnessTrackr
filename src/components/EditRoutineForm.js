import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { editRoutine, deleteRoutine } from '../api';
import { Link } from 'react-router-dom';

const EditRoutine = (props) => {
    const { routines } = props;

    let {routineId} = useParams();
    routineId = parseInt(routineId);

    const [routineToEdit] = routines.filter(routine => routine.id === routineId);
    const [routineName, setRoutineName] = useState(routineToEdit.name);
    const [routineGoal, setRoutineGoal] = useState(routineToEdit.goal);
    const [routineIsPublic, setRoutineIsPublic] = useState(routineToEdit.isPublic);



    const newRoutine = {
        name: routineName,
        goal: routineGoal,
        isPublic: routineIsPublic
    }

    return (

        <div id="editRoutinePage">
            <h1 id="editRoutinePageTitle">EDIT ROUTINE</h1>
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
                <label htmlFor='routineIsPublic'>Private: </label>
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
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const deletedRoutine = await deleteRoutine(routineId);
                    console.log(deletedRoutine);
                }}
            >
                Delete Routine
            </button>
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const updatedRoutine = await editRoutine(routineId, newRoutine);
                }}
                >
                Submit Changes
            </button>
            </span>
            <br/>
            <Link to='/myroutines'>
            <button>Back</button>
            </Link>

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