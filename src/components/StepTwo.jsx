import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { MyContext } from "../StepContext";

const Steptwo = () => {
  const { setStep, userData, setUserData } = useContext(MyContext);

  return (
    <div>
      <div>
        <div>
          <TextField
            label="Country"
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
            Country
            value={userData["country"]}
          />
        </div>
        <div>
          <TextField
            label="City"
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
            value={userData["city"]}
          />
        </div>
        <div>
          <TextField
            label="Postal Code"
            margin="normal"
            variant="outlined"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, postalNo: e.target.value })
            }
            value={userData["postalNo"]}
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="primary" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Steptwo;
