import { deleteParty, getParties, saveCompletion, getClowns } from "./dataAccess.js"


//* The function you write will convert each service request object into HTML representations and used in dataAccess.js's map()
const convertPartyToListElement = (partyArrayObject) => {
    const clowns = getClowns()
        
            return `<li>${partyArrayObject.child}'s Party
            <select class="clowns" id="clowns">
                <option value="">Choose</option>${clowns.map(clown => {
                    return `
                    <option value="${partyArrayObject.id}--${clown.id}">${clown.name}</option>`
                }
                ).join("")}
            </select>
            <button class="party__delete" id="party--${partyArrayObject.id}">Delete</button>
            </li>`

}
//*The function should define 1 parameter (value will be each object in the array)
export const Parties = () => {
    const parties = getParties()
    //*The description of the service request should be interpolated inside the <li> HTML representation.
    let html = `
        <ul id="ul__details">
            ${
                parties.map(convertPartyToListElement).join("")
            }
        </ul>        
    `
    return html
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("party--")) {
        const [,partyId] = click.target.id.split("--")
        deleteParty(parseInt(partyId))
    }
})
//* todo create a listener that will listen for state change in the Clowns choices section and add it to completion object by running saveCompletion function
mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [partyId, clownId] = event.target.value.split("--")
            const completion = {
                partyId: parseInt(partyId),
                clownId: parseInt(clownId),
                date_completed: Date.now()
             }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                 saveCompletion(completion)
        
        
            

        }
    }
)