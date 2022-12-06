import React, { useState } from "react";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="d-flex m-2">
        <div className="card">
          <div className="text-center p-2">Counter app</div>
          <div className="display-7 text-center">{count}</div>
          <div className="d-flex m-2 p-2">
            <div
              className="btn btn-danger m-2"
              onClick={() => {
                count === 0 ? setCount(count - 0) : setCount(count - 1);
              }}
            >
              -
            </div>
            <div
              className="btn btn-warning m-2"
              onClick={() => {
                setCount(0);
              }}
            >
              Reset
            </div>
            <div
              className="btn btn-success m-2"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sr.no</TableCell>
                  <TableCell align="left">Name of the Theater</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Location</TableCell>
                  <TableCell align="left">Screens</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell align="left">01</TableCell>
                <TableCell align="left">PVR</TableCell>
                <TableCell align="left">Multi Screen palace</TableCell>
                <TableCell align="left">Hyderabad</TableCell>
                <TableCell align="left">5</TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Example;
