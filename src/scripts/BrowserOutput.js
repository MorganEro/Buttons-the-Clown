import { Parties } from "./PartyRequests.js"
import { PartyInputForm } from "./UserInput.js"

//* imported Requests to show list of request that were made
//* imported ServiceForm to show the input field for customer requests

export const ClowningAroundBasicHtml = () => {
    return `
        <h1>CLOWNING AROUND</h1>
        <section class="partySignUp">
            <h2>Sign Up For A Party</h2>
            ${PartyInputForm()}
        </section>
        <section class="partyList">
            <h2>Current Party List</h2>
            ${Parties()}
        </section>

        <section class="CompletedParties">
            <h2>Completed Parties</h2>
            
              
        </section>
    
    `
}
