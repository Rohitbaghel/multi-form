import React, { useContext } from "react";
import "./App.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Displaydata from "./components/DisplayData";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { MyContext } from "./StepContext";
function App() {
  const { currentStep, final } = useContext(MyContext);

  const stepHandle = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
    }
  };
  return (
    <div className="App">
      <h1 style={{ color: "red", textDecoration: "underline" }}>
        Multi-Pages-Form
      </h1>
      <div className="center-stepper">
        <Stepper
          style={{ width: "90%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {stepHandle(currentStep)}
      {final.length > 0 ? <Displaydata /> : ""}
    </div>
  );
}

export default App;
