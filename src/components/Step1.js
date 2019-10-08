import React from 'react';
import success from '../success.svg';

function Step1(props) {
    return (
        <fieldset id="step_1" disabled={false}>

            <legend>Step 1</legend>
            <label htmlFor="num_attendees">
                How many people will be attending?
            </label>

            <select id="num_attendees" name={'people'} onChange={(e) => {props.handleChange(e)}} >
                <option value="0">Please Choose</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />

            <div id="attendee_container">
                <h3>Please provide full names:</h3>

                {Array.from(Array(parseInt(props.state.people)), (e, i) => {
                    return <div key={i}>
                            <label htmlFor="name_attendee_1">
                                Attendee {i} Name:
                            </label>
                            <input type="text" value={props.state.peopleNames[i]} name={'peopleName'} onChange={(e) => {props.handlePeopleChange(e.target.value, i)}} />
                           </div>
                })}

                <div className="resultContainer">
                    <img
                        src={success}
                        alt={'success'}
                        className={'resultIcon ' + (props.state.step1Validation === true ? 'active' : '')}
                    />
                </div>
            </div>

        </fieldset>
    );
}

export default Step1;
