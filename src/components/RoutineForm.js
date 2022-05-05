import React, {useState} from 'react';
import { createNewRoutine } from '../api';

const RoutineForm = (props) => {

const {routines, setRoutines} = props;

const [routineName, setRoutineName] = useState('');
const [routineGoal, setRoutineGoal] = useState('');
const [routineIsPublic, setRoutineIsPublic] = useState(false);


let newRoutine = {
    name: routineName,
    goal: routineGoal,
    isPublic: routineIsPublic
}

    return (

<>
<div id="newRoutine" >Create a New Routine</div>
<form id="routineForm" className="newRoutine" >
    <label htmlFor="routineName">Routine Name: </label>
    <input 
    type="text"
    id="routineName"
    name="routineName"
    onChange={(event) => { createNewRoutine() }}
    required
    />

</form>



</>





    )



}



export default RoutineForm;