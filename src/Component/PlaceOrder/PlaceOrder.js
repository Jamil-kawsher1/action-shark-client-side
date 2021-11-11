import { Alert, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import AccountCircle from '@mui/icons-material/AccountCircle';


const PlaceOrder = () => {

    const [placeorderdata, setPlaceorderdata] = useState({});
    const { isLoading, user, error } = useAuth();
    const [alert, setAlert] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newplaceorderdata = { ...placeorderdata };
        newplaceorderdata[field] = value;
        setPlaceorderdata(newplaceorderdata);

    }


    const handleloginSubmit = e => {
        console.log(placeorderdata);

        e.preventDefault();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 'auto', mb: 'auto' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Place order</Typography>
                    {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Account Created Succesfully!!!

                    </Alert>

                    </Container>}
                    {error && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="error">{error}</Alert>


                    </Container>}
                    {
                        !isLoading && <form onSubmit={handleloginSubmit}>

                            <TextField color='secondary' type="text" name="name" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label=" Name" variant="outlined" value={user.displayName} />
                            <TextField color='secondary' type="email" name="email" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label="Your Email" variant="outlined" value={user.email} />
                            <TextField color='secondary' name='productname' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="text" label="Product Name" variant="outlined" />
                            <TextField color="secondary" name='price' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="number" label="Price" variant="outlined" />
                            <TextField color="secondary" name='mobile' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="number" label="Mobile Number" variant="outlined" />
                            <TextField color="secondary" name='address' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="text" label="Address" variant="outlined" />
                            <Button type="submit" color='success' sx={{ width: "75%", m: 1, }} variant="contained">Place Order</Button>

                        </form>

                    }
                    {isLoading && <CircularProgress />}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src='https://i.ibb.co/WPrvQVk/Place-your-curbside-pickup-order-online-abstract-concept-vector-illustration-Safe-grocery-pick-up-qu.jpg' alt=""></img>
                </Grid>

            </Grid>
        </Box >
    );
};

export default PlaceOrder;