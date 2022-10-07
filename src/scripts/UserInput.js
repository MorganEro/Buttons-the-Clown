import { sendPartyRequestToJson } from "./DataAccess.js";


//* collect the information the user inputs with some input fields. They will be used in PartyRequests.js

export const PartyInputForm = () => {
    let html = `
        <div class="inputField">
            <label class="label" for="partyParent">Parent Name</label>
            <input type="text" name="partyParent" class="input" />
        </div>
        <div class="inputField">
            <label class="label" for="partyChild">Child Name</label>
            <input type="text" name="partyChild" class="input" />
        </div>
        <div class="inputField">
            <label class="label" for="address">Your Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="inputField">
            <label class="label" for="ReservationDate">Date needed</label>
            <input type="date" name="reservationDate" class="input" />
        </div>

        <button class="button" id="submitParty">Submit Party Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")


//* todo create the event listener that collects the user input, constructs a state object for the reservation, and then pass it to your function that you defined above as an argument. Verify that it works by looking in your database.json file as see if a new object is in your reservations resource collection.


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitParty") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='partyParent']").value
        const userPartyChild = document.querySelector("input[name='partyChild']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: userParentName,
            child: userPartyChild,
            address: userAddress,
            reservationDate: userReservationDate
        }

        // Send the data to the API for permanent storage
        sendPartyRequestToJson(dataToSendToAPI)
    }
})