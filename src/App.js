import React from 'react';
import './App.scss';
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            people: 0,
            peopleNames: {
                0: '',
                1: '',
                2: '',
                3: '',
                4: '',
            },

            nameBadge: null,
            companyName: null,
            specialAccomodation: null,
            specialAccomodationReason: null,

            readyToRock: null,

            step1Validation: false,
            step2Validation: false,
            step3Validation: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
        this.validation = this.validation.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value},(updatedState) => {this.validation()});
    }

    handlePeopleChange(value, position) {

        this.setState({
            peopleNames: {...this.state.peopleNames, [position]: value}
        }, (updatedState) => {this.validation()});
    }

    validation() {

        // step 1
        let step1Errors = [];
        for (let i=0; i < this.state.people; i++) {

            if (this.state.peopleNames[i] === '') {
                step1Errors.push('missingName');
            }
        }

        this.setState({step1Validation: (step1Errors.length === 0)})
    }

    render() {

        return (
            <div id="page-wrap">
                <h1>Seminar <span>Registration</span></h1>
                <form action="#" method="post">
                    <Step1 handleChange={this.handleChange} handlePeopleChange={this.handlePeopleChange} state={this.state}/>
                    <Step2 handleChange={this.handleChange} state={this.state} />
                    <Step3 handleChange={this.handleChange} state={this.state} />
                </form>
            </div>
        );
    }

}

export default App;
