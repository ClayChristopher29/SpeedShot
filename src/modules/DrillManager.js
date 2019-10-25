// create a variable to streamline url usage throughout API functions
const remoteURL = "http://localhost:5002"

// export all calls and posts and deletes from API

export default {
    // get single drill information
    getOne(id){
        return fetch(`${remoteURL}/drills/${id}`).then(result => result.json())
    },
    // get all drills from API
    getAll(){
        return fetch(`${remoteURL}/drills`).then(result => result.json())
    },
    // delete single drill from JSON
    delete(id){
        return fetch (`${remoteURL}/range/${id}`,{
            method:"DELETE"
        })
        .then(result => result.json)
    },
    post(newDrill){
        return fetch(`${remoteURL}/range`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newDrill)
        }).then(data => data.json())
    },
    update(editedDrill) {
        return fetch(`${remoteURL}/range/${editedDrill.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(editedDrill)
        }).then(data => data.json())
    }
}
