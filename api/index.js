const baseURL = 'https://fitnesstrac-kr.herokuapp.com/';



export const loginUser = async (userObject) => {
    const url = `${baseURL}/users/login`;
    const response = await fetch (url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: userObject.user,
                password: userObject.password,
            },
        }),
    });

    console.log(response);
    const json = await response.json();
    console.log(json);

    localStorage.setItem('fitness_tracker_JWT', json.data.token)
    return json;
}