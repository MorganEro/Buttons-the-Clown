

//* todo create application state 




//* todo send requests where needed

//* todo delete request for delete button

const applicationState = {
    parties: [],
    clowns: [],
    completions: []

}
//* todo save database.json info to accessible const
const API = "http://localhost:8088"


// todo* export getter functions
export const getParties = () => {
    return applicationState.parties.map(party =>
        ({...party}))
    }
export const getClowns = () => {
        return applicationState.clowns.map(clown =>
            ({...clown}))
        }
        
export const getCompletions = () => {
            return applicationState.completions.map(completion =>
                ({...completion}))
            } 

//* todo export fetches
export const fetchParties = () => {
    return fetch(`${API}/parties`)
        .then(response => response.json())
        .then(
            (externalPartyData) => {
                applicationState.parties = externalPartyData
            }
        )
}
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (externalClownData) => {
                applicationState.parties = externalClownData
            }
        )
}
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (externalCompletionData) => {
                applicationState.completions = externalCompletionData
            }
        )
}




//* todo create a function in the data access module that will POST a reservation state object to your API to be saved in permanent storage.

//* take the transient state when the user clicks the button and convert it in the database.json file by using a fetch() call
export const sendPartyRequestToJson = (userSubmittedParty) => {
    const mainContainer = document.querySelector("#container")
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userSubmittedParty)
    }

//* Update your sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.
    return fetch(`${API}/parties`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
//* the function whose responsibility it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument.

export const deleteParty = (id) => {
    return fetch(`${API}/parties/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const saveCompletion = (completionObject) => {
    return fetch(`${API}/completions`, {
       method: "POST", 
       headers: {
        "content-type": "application/json"
       }, 
       body: JSON.stringify(completionObject)
    })
    
}

