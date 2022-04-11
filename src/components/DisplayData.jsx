import React from "react";
import { useContext } from "react";

import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { MyContext } from "../StepContext";
const Displaydata = () => {
  const { final } = useContext(MyContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          style={{ width: "100%", justifyContent: "center" }}
          size="small"
          arial-lable="caption table"
        >
          <TableHead>
            <TableRow style={{ backgroundColor: "gray", color: "black" }}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Postal No.</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Landmark</TableCell>
              <TableCell>House No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {final.map((e, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{e.firstname}</TableCell>
                  <TableCell>{e.lastname}</TableCell>
                  <TableCell>{e.contactNumber}</TableCell>
                  <TableCell>{e.country}</TableCell>
                  <TableCell>{e.city}</TableCell>
                  <TableCell>{e.postalNo}</TableCell>
                  <TableCell>{e.address}</TableCell>

                  <TableCell>{e.landmark}</TableCell>
                  <TableCell>{e.house_no}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Displaydata;
