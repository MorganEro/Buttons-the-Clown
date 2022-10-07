import { ClowningAroundBasicHtml } from "./BrowserOutput.js";
//* todo import fetches
import { fetchCompletions, fetchParties, fetchClowns } from "./dataAccess.js";
//* fetch the data from the API and store it in application state before you can convert the data structures to HTML representations


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchParties()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = ClowningAroundBasicHtml()
        }
    )
}
//* Now your main module has to listen for the custom event and invoke the render() function to build all the HTML again.

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render ()