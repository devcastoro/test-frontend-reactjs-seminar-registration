import React from 'react';
import success from "../success.svg";

function Step2(props) {
    return (

        <fieldset id="step_2">

            <legend>Step 2</legend>
            <p>
                Would you like your company name on your badges?
            </p>
            <input type="radio" name="nameBadge" value={'true'} onChange={(e) => {props.handleChange(e)}} />
            <label htmlFor="company_name_toggle_on">Yes</label>
            <input type="radio" name="nameBadge" value={'false'} onChange={(e) => {props.handleChange(e)}} />
            <label htmlFor="company_name_toggle_off">No</label>

            { props.state.nameBadge === 'true'
                ? <div id="company_name_wrap">
                    <label htmlFor="company_name"> Company Name: </label>
                    <input type="text" name={'companyName'} onChange={(e) => {props.handleChange(e)}} />
                  </div>
                : false
            }

            <div>
                <p> Will anyone in your group require special accommodations? </p>
                <input type="radio" name={'specialAccommodation'} value={'true'} onChange={(e) => {props.handleChange(e)}}  />
                <label htmlFor="special_accommodations_toggle_on">Yes</label>
                &emsp;
                <input type="radio" name={'specialAccommodation'} value={'false'} onChange={(e) => {props.handleChange(e)}}  />
                <label htmlFor="special_accommodations_toggle_off">No</label>
            </div>

            { props.state.specialAccommodation === 'true'
                ? <div id="special_accommodations_wrap">
                    <label htmlFor="special_accommodations_text">Please explain below:</label>
                    <textarea rows="10" cols="10" name={'specialAccommodationReason'} onChange={(e) => {props.handleChange(e)}} />
                  </div>
                : false
            }

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
