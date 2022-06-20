import { Alert, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router';
import placeorderimg from "../img/placeorder.png"
import axios from 'axios';


const PlaceOrder = () => {

    const [placeorderdata, setPlaceorderdata] = useState({});
    const { isLoading, user, error } = useAuth();
    const { id } = useParams();
    const [singleService, setSingleService] = useState([]);
    const url = `https://evening-bayou-52199.herokuapp.com/products/${id}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newplaceorderdata = { ...placeorderdata };
        newplaceorderdata[field] = value;
        setPlaceorderdata(newplaceorderdata);

    }


    const handleOrderSubmit = e => {
        // console.log(placeorderdata);
        const userData = {
            name: user.displayName,
            email: user.email,
            orderstatus: "Pending",
            address: placeorderdata.address,
            mobile: placeorderdata.mobile,
        };

        const productData = {
            aname: singleService.aname,
            price: singleService.price,
            img: singleService.img,
            description: singleService.description,
            rating: singleService.rating,


        }
        const userOrderData = { ...productData, ...userData };
        console.log(userOrderData);

        axios.post('https://evening-bayou-52199.herokuapp.com/placeorder', userOrderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Order Placed SuccessFully");


                }
            })
        e.preventDefault();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 'auto', mb: 'auto' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Place order</Typography>
                    {/* {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Account Created Succesfully!!!

                    </Alert>

                    </Container>} */}
                    {/* {error && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="error">{error}</Alert>


                    </Container>} */}
                    {
                        !isLoading && <form onSubmit={handleOrderSubmit}>

                            <TextField color='secondary' type="text" name="name" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label=" Name" variant="outlined" value={user.displayName} />
                            <TextField color='secondary' type="email" name="email" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label="Your Email" variant="outlined" value={user.email} />
                            <TextField color='secondary' name='productname' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="text" variant="outlined" value={singleService.aname} disabled />
                            <TextField color="secondary" name='price' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="text" value={singleService.price + " $"} variant="outlined" disabled />
                            <TextField color="secondary" name='mobile' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="number" label="Mobile Number" variant="outlined" />
                            <TextField color="secondary" name='address' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="text" label="Address" variant="outlined" />
                            <Button type="submit" color='success' sx={{ width: "75%", m: 1, }} variant="contained">Place Order</Button>

                        </form>

                    }
                    {isLoading && <CircularProgress />}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={placeorderimg} alt=""></img>
                </Grid>

            </Grid>
        </Box >
    );
};

export default PlaceOrder;