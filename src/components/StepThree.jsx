import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { MyContext } from "../StepContext";

const Stepthree = () => {
  const { setStep, userData, setUserData, submitData } = useContext(MyContext);

  return (
    <div>
      <div>
        <div>
          <TextField
            label="Address"
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            value={userData["Address"]}
          />
        </div>
        <div>
          <TextField
            label="landmark"
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, landmark: e.target.value })
            }
            value={userData["landmark"]}
          />
        </div>
        <div>
          <TextField
            label="House No."
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, house_no: e.target.value })
            }
            value={userData["House No."]}
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <span></span>
        <Button variant="contained" color="primary" onClick={submitData}>
          submit
        </Button>
      </div>
    </div>
  );
};

export default Stepthree;
