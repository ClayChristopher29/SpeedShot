const remoteURL = "http://localhost:5002"

export default  {
    getAll: () => {
        return fetch("http://localhost:5002/users")
            .then(au => au.json())
    },

    getSingle: (userId) => {
        return fetch(`${remoteURL}/users/${userId}`)
            .then(su => su.json())
    },

    postUser: (newUser) => {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(u => u.json())
    },
    checkUserEmail: (userEmail) => {
        return fetch(`${remoteURL}/users?userEmail=${userEmail}`)
            .then(su => su.json())
    },

    getUsers() {
        return fetch(`${remoteURL}/users`)
            .then(e => e.json())
    }
}