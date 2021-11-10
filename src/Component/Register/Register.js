import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, logOut, error } = useAuth();
    const [alert, setAlert] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    const handleloginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password Did Not Matched Please check!!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name);

        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 'auto', mb: 'auto' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Account Created Succesfully!!!

                    </Alert>

                    </Container>}
                    {error && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="error">{error}</Alert>


                    </Container>}
                    {
                        !isLoading && <form onSubmit={handleloginSubmit}>

                            <TextField type="text" name="name" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label="Your Name" variant="standard" />
                            <TextField type="email" name="email" onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} label="Your Email" variant="standard" />
                            <TextField name='password' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="password" label="Your Password" variant="standard" />
                            <TextField name='password2' onBlur={handleOnBlur} sx={{ width: "75%", m: 1, }} type="password" label="Retype Your Password" variant="standard" />
                            <Button type="submit" sx={{ width: "75%", m: 1, backgroundColor: 'darkgoldenrod' }} variant="contained"><AppRegistrationIcon></AppRegistrationIcon> Register</Button>
                            <Link style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Alrady Registered?Please Login</Button></Link>
                        </form>

                    }
                    {isLoading && <CircularProgress />}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src='https://i.ibb.co/ZWz5PCz/signup.png' alt=""></img>
                </Grid>

            </Grid>
        </Box >
    );
};

export default Register;