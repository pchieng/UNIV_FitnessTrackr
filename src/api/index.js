const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api';


export const registerNewUser = async (userObject) => {
    const url = `${baseURL}/users/register`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userObject.user,
            password: userObject.password
        }),
    });
    const json = await response.json();
    console.log(json);

    localStorage.setItem('fitness_tracker_JWT', json.token)

    return json;
}

export const loginUser = async (userObject) => {
    const token = localStorage.getItem("fitness_tracker_JWT");
    const url = `${baseURL}/users/login`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userObject.user,
            password: userObject.password
        }),
    });

    const json = await response.json();
    console.log(json);
    localStorage.setItem('fitness_tracker_JWT', json.token)
    return json;
}

export const testAuthentication = async (token) => {
    const url = `${baseURL}/users/me`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(console.error);

    return response;
}



export const getRoutines = async () => {
    const url = `${baseURL}/routines`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);

    return response
};

export const getRoutinesByUser = async () => {
    const user = await testAuthentication(localStorage.getItem('fitness_tracker_JWT'));
    const username = user.username;
    const url = `${baseURL}/users/${username}/routines`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        }
    })
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);
    return response;
}


export const createNewRoutine = async (newRoutine) => {

    const url = `${baseURL}/routines`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(newRoutine)
    })
    const json = await response.json();
    console.log(json)
    if (json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Routine ${newRoutine.name} has been created`)
        return json;
    }
}


export const editRoutine = async (routineId, routineToEdit) => {

    const url = `${baseURL}/routines/${routineId}`;
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(routineToEdit)
    })
    const json = await response.json();
    if (json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Routine has been updated`)
        return json;
    }

}

export const deleteRoutine = async (routineId) => {
    const url = `${baseURL}/routines/${routineId}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        }
    })
    const json = await response.json();
    if (json.success) {
        alert('Routine has been deleted')
        return json;
    } else {
        alert(`${json.error}`)
    }

}



export const getActivities = async () => {
    const url = `${baseURL}/activities`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);

    return response;
}

export const getRoutinesByActivity = async (activityId) => {
    const url = `${baseURL}/activities/${activityId}/routines`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(console.error);
    return response;
}

export const createNewActivity = async (newActivity) => {
    const url = `${baseURL}/activities`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(newActivity)
    })
    const json = await response.json();
    if (json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Activity ${newActivity.name} has been created`)
        return json;
    }
}

export const addActivityToRoutine = async (routineId, activityToAdd) => {
    const url = `${baseURL}/routines/${routineId}/activities`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(activityToAdd)
    })
    const json = await response.json();
    if (json.id) {
        alert(`Activity has been added`)
        return json;
    } else {
        alert(json.error)
        return json;
    }
}

export const editRoutineActivity = async (routineActivityId, routineActivityToEdit) => {
    const url = `${baseURL}/routine_activities/${routineActivityId}`;
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(routineActivityToEdit)
    })
    const json = await response.json();
    if (json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Routine activity has been updated`)
        return json;
    }
}

export const  deleteRoutineActivity = async (routineActivityId) => {
    const url = `${baseURL}/routine_activities/${routineActivityId}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        }
    })
    const json = await response.json();
    if (json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Activity has been removed from this routine`)
        return json;
    }
}




export const editActivity = async(activityId, activityToEdit) => {
    
    const url = `${baseURL}/activities/${activityId}`;
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        },
        body: JSON.stringify(activityToEdit)
    })
    const json = await response.json();
    if(json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Routine has been updated`)
        return json;
    }

}

export const deleteActivity = async(activityId) => {
    const url = `${baseURL}/activities/${activityId}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('fitness_tracker_JWT')}`
        }
    })
    const json = await response.json();
    if(json.success) {
        alert(' Activity has been deleted')
        return json;
    } else {
        alert(`${json.error}`)
    }

}