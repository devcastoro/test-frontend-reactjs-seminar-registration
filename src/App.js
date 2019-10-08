import React from 'react';
import './App.scss';
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: "0",
            peopleNames: {
                0: '',
                1: '',
                2: '',
                3: '',
                4: '',
            },

            nameBadge: null,
            companyName: null,
            specialAccommodation: null,
            specialAccommodationReason: null,

            readyToRock: false,

            step1Validation: false,
            step2Validation: false,
            step3Validation: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
        this.validation = this.validation.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name]: value},(updatedState) => {this.validation()});

        //console.log(target,value,name);
    }

    handleCheckBox(event) {
        const name = event.target.name;

        this.setState({[name]: !this.state[name]},(updatedState) => {this.validation()});
    }

    handlePeopleChange(value, position) {

        this.setState({
            peopleNames: {...this.state.peopleNames, [position]: value}
        }, (updatedState) => {this.validation()});
    }

    validation() {

        // step 1
        let step1Errors = [];

        if (this.state.people === "0") {
            step1Errors.push('missingPeopleParameter')
        }

        for (let i=0; i < this.state.people; i++) {

            if (this.state.peopleNames[i] === '') {
                step1Errors.push('missingNameParameter');
            }
        }

        // step 2
        let step2Errors = [];

        if (this.state.nameBadge === null || this.state.specialAccommodation === null) {
            step2Errors.push('missingMandatoryParameters')
        }

        if (this.state.nameBadge === 'true' && (this.state.companyName === null || this.state.companyName === '' )) {
            step2Errors.push('missingCompanyName')
        }

        if (this.state.specialAccommodation === 'true' && (this.state.specialAccommodationReason === null || this.state.specialAccommodationReason === '' )) {
            step2Errors.push('missingReason')
        }

        // step 3
        let step3Errors = [];

        if (this.state.readyToRock === null || this.state.readyToRock === false) {
            step3Errors.push('missingReadyToRock')
        }

        this.setState({
            step1Validation: (step1Errors.length === 0),
            step2Validation: (step2Errors.length === 0),
            step3Validation: (step3Errors.length === 0)
        })
    }

    submit(e) {

        e.preventDefault();

        // extrapolate People Names list
        let finalPeopleList = [];
        for (let i=0; i < this.state.people; i++) {
            finalPeopleList.push(this.state.peopleNames[i]);
        }
        if (this.state.step1Validation || this.state.step2Validation || this.state.step3Validation) {
            alert(
                '\n People ' + this.state.people +
                '\n PeopleNames ' + finalPeopleList +
                '\n Company Name on Badge ' + this.state.nameBadge +
                '\n Company Name ' + this.state.companyName +

                '\n Special Accommodation ' + this.state.specialAccommodation +
                '\n Special Accommodation Reason: ' + this.state.specialAccommodationReason +

                '\n Ready to rock ' + this.state.readyToRock
            )
        }

    }

    render() {

        console.log(this.state);
        return (
            <div id="page-wrap">
                <h1>Seminar <span>Registration</span></h1>
                <form onSubmit={(this.submit)}>
                    <Step1 handleChange={this.handleChange} handlePeopleChange={this.handlePeopleChange} state={this.state}/>
                    <Step2 handleChange={this.handleChange} state={this.state} />
                    <Step3 handleChange={this.handleChange} handleCheckBox={this.handleCheckBox} state={this.state} />
                </form>
            </div>
        );
    }

}

export default App;
