import React, { useState } from 'react';
import { createNewRoutine } from '../api';

const RoutineForm = (props) => {

    const { routines, setRoutines } = props;

    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [routineIsPublic, setRoutineIsPublic] = useState(true);


    let newRoutine = {
        name: routineName,
        goal: routineGoal,
        isPublic: routineIsPublic
    }

    return (

        <>
            <h1 id="newRoutine" >Create a New Routine</h1>
            <form id="routineForm" className="newRoutine" >
                <label htmlFor="newRoutineName">Routine Name: </label>
                <input
                    type="text"
                    id="newRoutineName"
                    name="newRoutineName"
                    onChange={(event) => { setRoutineName(event.target.value) }}
                    required
                />
                <br />
                <label htmlFor='newRoutineGoal'>Routine Goal: </label>
                <input
                    type="text"
                    id="newRoutineGoal"
                    name="newRoutineGoal"
                    onChange={(event) => { setRoutineGoal(event.target.value) }}
                />
                <br />
                <button
                    onClick={async (event) => {
                        event.preventDefault();
                        const routineToAdd = await createNewRoutine(newRoutine);
                        setRoutines([...routines, routineToAdd]);
                        document.getElementById('newRoutineName').value = '';
                        document.getElementById('newRoutineGoal').value = '';
                    }}>
                    Submit
                </button>
            </form>



        </>





    )



}



export default RoutineForm;