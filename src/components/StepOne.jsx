import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { MyContext } from "../StepContext";
const Stepone = () => {
  const { setStep, userData, setUserData } = useContext(MyContext);
  return (
    <div>
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          value={userData["First Name"]}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          value={userData["Last Name"]}
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          onChange={(e) =>
            setUserData({ ...userData, contactNumber: e.target.value })
          }
          value={userData["Contact Number"]}
        />
      </div>
      <Button onClick={() => setStep(2)} variant="contained" color="primary">
        Next
      </Button>
    </div>
  );
};

export default Stepone;
