import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  return (
      <div id="page-wrap">
        <h1>Seminar <span>Registration</span></h1>
        <form action="#" method="post">
            <Step1/>
            <Step2/>
            <Step3/>
        </form>
      </div>
  );
}

export default App;
