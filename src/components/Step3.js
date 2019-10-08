import React from 'react';

function Step3() {
    return (

        <fieldset id="step_3">
            <legend>Step 3</legend>
            <label htmlFor="rock">
                Are you ready to rock?
            </label>
            <input type="checkbox" id="rock" />
            <input type="submit" id="submit_button" value="Complete Registration" />
        </fieldset>
    );
}

export default Step3;
