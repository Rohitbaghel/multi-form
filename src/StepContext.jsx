import React, { useState } from "react";
import { createContext } from "react";
import App from "./App";

export const MyContext = createContext({});
export default function StepContext() {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [final, setFinalData] = useState([]);
  function submitData() {
    setFinalData((final) => [...final, userData]);
    setUserData("");
    setStep(1);
  }
  return (
    <div>
      <MyContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          final,
          setFinalData,
          submitData,
        }}
      >
        <App />
      </MyContext.Provider>
    </div>
  );
}
