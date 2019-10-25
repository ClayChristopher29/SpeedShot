// creating a recall for the URL
const remoteURL = "http://localhost:5002"

export default {
    getOne(rangeId){
        return fetch(`${remoteURL}/rangeData/${rangeId}?_expand=drill&_expand=platform&_expand=weather`).then(result => result.json())
    },
    getAll(){
        return fetch(`${remoteURL}/rangeData`).then(result => result.json())
    },
    delete(rangeId){
        return fetch (`${remoteURL}/rangeData/${rangeId}`,{
            method:"DELETE"
        })
        .then(result => result.json())
    },
    post(newData){
        return fetch(`${remoteURL}/rangeData`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newData)
        }).then(data => data.json())
    },
    update(editedData) {
        return fetch(`${remoteURL}/rangeData/${editedData.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(editedData)
        }).then(data => data.json())
    }
}