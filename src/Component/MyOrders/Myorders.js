import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const Myorders = () => {
  const [myorders, setMyorders] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_Base_Url}/myorder/${email}`)
      .then((res) => res.json())
      .then((data) => setMyorders(data));
  }, [email, myorders]);
  const handleCancel = (id) => {
    const del = window.confirm("Are You Sure you Want to Cancel?");
    if (del) {
      const url = `${process.env.REACT_APP_Base_Url}/deleteorder/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then(async (res) => {
        // if (res.status == 200) {
        //     alert("Cancelled  Successfully");
        // }
      });
    }
  };

  return (
    <div>
      <h2> Orders: {myorders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myorders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.aname}
                </TableCell>
                <TableCell align="right" scope="row">
                  {row.price + " $"}
                </TableCell>
                <TableCell align="right" scope="row">
                  {row.orderstatus}
                </TableCell>
                <TableCell align="right" scope="row">
                  <Button
                    color="error"
                    onClick={() => handleCancel(row._id)}
                    endIcon={<DeleteIcon />}
                    size="small"
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Myorders;
