// creating a recall for the URL
const remoteURL = "http://localhost:5002"

export default {
    get(id){
        return fetch(`${remoteURL}/rangeData/${id}`).then(result => result.json())
    },
    getAll(){
        return fetch(`${remoteURL}/rangeData`).then(result => result.json())
    },
    delete(id){
        return fetch (`${remoteURL}/rangeData/${id}`,{
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