const remoteURL = "http://localhost:5002"

// export all calls and posts and deletes from API

export default {
    // get single drill information
    getOne(id){
        return fetch(`${remoteURL}/weather/${id}`).then(result => result.json())
    },
    // get all drills from API
    getAll(){
        return fetch(`${remoteURL}/weather`).then(result => result.json())
    },
    // delete single drill from JSON
    delete(id){
        return fetch (`${remoteURL}/weather/${id}`,{
            method:"DELETE"
        })
        .then(result => result.json)
    }
}