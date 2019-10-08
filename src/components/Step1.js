import React from 'react';
import success from '../success.svg';

function Step1() {
    return (

        <fieldset id="step_1">
            <legend>Step 1</legend>
            <label htmlFor="num_attendees">
                How many people will be attending?
            </label>
            <select id="num_attendees">
                <option id="opt_0" value="0">Please Choose</option>
                <option id="opt_1" value="1">1</option>
                <option id="opt_2" value="2">2</option>
                <option id="opt_3" value="3">3</option>
                <option id="opt_4" value="4">4</option>
                <option id="opt_5" value="5">5</option>
            </select>
            <br />
            <div id="attendee_container">
                <div id="attendee_1_wrap">
                    <h3>Please provide full names:</h3>
                    <label htmlFor="name_attendee_1">
                        Attendee 1 Name:
                    </label>
                    <input type="text" id="name_attendee_1" />
                </div>
                <div id="attendee_2_wrap">
                    <label htmlFor="name_attendee_2">
                        Attendee 2 Name:
                    </label>
                    <input type="text" id="name_attendee_2" />
                </div>
                <div id="attendee_3_wrap">
                    <label htmlFor="name_attendee_3">
                        Attendee 3 Name:
                    </label>
                    <input type="text" id="name_attendee_3" />
                </div>
                <div id="attendee_4_wrap">
                    <label htmlFor="name_attendee_4">
                        Attendee 4 Name:
                    </label>
                    <input type="text" id="name_attendee_4" />
                </div>
                <div id="attendee_5_wrap">
                    <label htmlFor="name_attendee_5">
                        Attendee 5 Name:
                    </label>
                    <input type="text" id="name_attendee_5" />
                </div>
                <div className="resultContainer">
                    <img src={success} alt={'success'} />
                </div>
            </div>
        </fieldset>
    );
}

export default Step1;
