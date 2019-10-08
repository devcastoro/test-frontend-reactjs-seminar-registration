import React from 'react';

function Step3(props) {
    return (

        <fieldset id="step_3">
            <legend>Step 3</legend>
            <label htmlFor="rock">
                Are you ready to rock?
            </label>
            <input type="checkbox" id="rock" />
            <input type="submit" id="submit_button" value="Complete Registration" disabled={(!props.state.step3Validation)} />
        </fieldset>
    );
}

export default Step3;
