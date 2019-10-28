const remoteURL = "http://localhost:5002"

// export all calls and posts and deletes from API

export default {
    // get single drill information
    getOne(id){
        return fetch(`${remoteURL}/userDrills/${id}`).then(result => result.json())
    },
    // get all drills from API
    getAll(){
        return fetch(`${remoteURL}/userDrills?userId=${localStorage.getItem("userId")}&_expand=drill`).then(result => result.json())
    },
    // delete single drill from JSON
    delete(id){
        return fetch (`${remoteURL}/userDrills/${id}`,{
            method:"DELETE"
        })
        .then(result => result.json)
    }}