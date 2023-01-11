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
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../Hooks/useAuth";

const ManageProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const { user } = useAuth();
  const email = user.email;

  const url = `${process.env.REACT_APP_Base_Url}/products}`;
  // console.log(url);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_Base_Url}/products`)
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, [allProduct]);
  const handledelete = (id) => {
    const del = window.confirm("Are You Sure you Want to Delete");
    if (del) {
      const url = `${process.env.REACT_APP_Base_Url}/deleteproduct/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then(async (res) => {});
    }
  };

  return (
    <div>
      <h2> Total Product: {allProduct.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProduct.map((row) => (
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
                  <Button
                    color="error"
                    onClick={() => handledelete(row._id)}
                    endIcon={<DeleteIcon />}
                    size="small"
                    variant="contained"
                  >
                    Delete
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

export default ManageProducts;
