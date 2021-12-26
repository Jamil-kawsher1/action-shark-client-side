import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || '/';
    const { loginUser, user, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});
    // if (user.email) {

    // }
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }


    const handleloginSubmit = e => {
        console.log(loginData.email, loginData.password);
        if (loginData.email == undefined) {
            alert("Please Check Some Info");
        }
        else {
            loginUser(loginData.email, loginData.password);
        }


        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 'auto', mb: 'auto' }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Login Succesfull!!!

                    </Alert>
                        {history.push(history.push(redirect_url))}
                    </Container>}
                    <form onSubmit={handleloginSubmit}>

                        <TextField required type="email" name="email" onBlur={handleOnchange} sx={{ width: "75%", m: 1, }} label="Your Email" variant="standard" />
                        <TextField required name='password' onBlur={handleOnchange} sx={{ width: "75%", m: 1, }} type="password" label="Your Password" variant="standard" />
                        <Button type="submit" sx={{ width: "75%", m: 1, backgroundColor: 'green' }} variant="contained"><LoginIcon sx={{ mr: 1, }}></LoginIcon> Login</Button>
                        <Link style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New user ?Please Register</Button></Link>
                    </form>
                    <p>Social Login</p>
                    <Button onClick={signInWithGoogle} sx={{ width: "75%", m: 1, backgroundColor: " #ba000d", }} variant="contained"><GoogleIcon sx={{ mr: 1 }}></GoogleIcon> Google Sigin In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "80%" }} src='https://i.ibb.co/3Y5h01N/login-ai.png' alt=""></img>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;