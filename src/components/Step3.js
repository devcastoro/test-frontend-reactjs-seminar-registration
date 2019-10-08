import React from 'react';

function Step3(props) {
    return (

        <fieldset id="step_3">
            <legend>Step 3</legend>
            <label htmlFor="rock"> Are you ready to rock? </label>
            <input type="checkbox" name={'readyToRock'} checked={props.state.readyToRock} onChange={(e) => {props.handleCheckBox(e)}}  />

            <input type="submit" id="submit_button" value="Complete Registration"
                   disabled={(!props.state.step1Validation || !props.state.step2Validation || !props.state.step3Validation)}
            />
        </fieldset>
    );
}

export default Step3;
