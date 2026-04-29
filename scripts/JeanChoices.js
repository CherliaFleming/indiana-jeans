import { setOwnsBlueJeans } from "./transientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}


export const JeanChoices = () => {
    let html = `
        <div class="survey-input">
            <h2>Do you own a pair of blue jeans?</h2>
            <input type="radio" name="ownsJeans" value="true" /> Yes
            <input type="radio" name="ownsJeans" value="false" /> No
            <input type="radio" name="ownsJeans" value="true"/> Maybe
        </div>
    `

    return html
}