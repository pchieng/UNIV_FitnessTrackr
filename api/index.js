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

    localStorage.setItem('fitness_tracker_JWT', json.data.token)

    return json;
}

export const loginUser = async (userObject) => {
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


export const createNewRoutine = async(newRoutine) => {

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
    if(json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Routine ${newRoutine.name} has been created`)
        return json;
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
        method:"GET",
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
    console.log(json)
    if(json.error) {
        alert(`${json.error}`)
    } else {
        alert(`Activity ${newActivity.name} has been created`)
        return json;
    }
}

// export const deleteRoutineActivity = async ()