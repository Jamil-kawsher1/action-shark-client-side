import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
const ManageAllOrders = () => {
    const [allorder, setAllorder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setAllorder(data))
    }, [allorder])

    const handleCancel = id => {
        const del = window.confirm("Are You Sure you Want to Delete?");
        if (del) {
            const url = `http://localhost:5000/deleteorder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(async res => {
                    // if (res.status == 200) {
                    //     alert("Cancelled  Successfully");

                    // }
                });
        }
    }

    const handleconfirm = id => {
        const url = `http://localhost:5000/orderstatus/${id}`
        axios.put(url,)
            .then(response => console.log(response));
    }
    return (
        <div>
            <h2> Total Orders: {allorder.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ordered By</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Action</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allorder.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.aname}
                                </TableCell>
                                <TableCell scope="row">{row.price + " $"}</TableCell>
                                <TableCell scope="row">{row.orderstatus}</TableCell>
                                <TableCell scope="row"><Button color='error' onClick={() => handleCancel(row._id)} endIcon={<DeleteIcon />} size="small" variant='contained'>Cancel</Button> < Button sx={{ m: { md: '80' } }} color='success' onClick={() => handleconfirm(row._id)} endIcon={<CheckCircleIcon />} size="small" variant='contained'>Confirm</Button></TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};

export default ManageAllOrders;