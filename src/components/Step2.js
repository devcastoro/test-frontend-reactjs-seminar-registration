import React from 'react';
import success from "../success.svg";

function Step2(props) {
    return (

        <fieldset id="step_2">
            <legend>Step 2</legend>
            <p>
                Would you like your company name on your badges?
            </p>
            <input type="radio" id="company_name_toggle_on" name="company_name_toggle_group" />
            <label htmlFor="company_name_toggle_on">Yes</label>
            &emsp;
            <input type="radio" id="company_name_toggle_off" name="company_name_toggle_group" />
            <label htmlFor="company_name_toggle_off">No</label>
            <div id="company_name_wrap">
                <label htmlFor="company_name">
                    Company Name:
                </label>
                <input type="text" id="company_name" />
            </div>
            <div>
                <p>
                    Will anyone in your group require special accommodations?
                </p>
                <input type="radio" id="special_accommodations_toggle_on" name="special_accommodations_toggle" />
                    <label htmlFor="special_accommodations_toggle_on">Yes</label>
                    &emsp;
                    <input type="radio" id="special_accommodations_toggle_off" name="special_accommodations_toggle" />
                    <label htmlFor="special_accommodations_toggle_off">No</label>
            </div>
            <div id="special_accommodations_wrap">
                <label htmlFor="special_accomodations_text">
                    Please explain below:
                </label>
                <textarea rows="10" cols="10" id="special_accomodations_text"/>
            </div>
            <div className="resultContainer">
                <img
                    src={success}
                    alt={'success'}
                    className={'resultIcon ' + (props.state.step2Validation === true ? 'active' : '')}
                />
            </div>
        </fieldset>
    );
}

export default Step2;
