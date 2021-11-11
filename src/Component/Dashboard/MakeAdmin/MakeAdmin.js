import { applyActionCode } from '@firebase/auth';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleOnSubmit = e => {

        const user = { email }

        axios.put("http://localhost:5000/users/admin", user)
            .then(res => {
                console.log(res);
            });
        e.preventDefault()
    }
    return (
        <div>
            <h3> Make  an Admin</h3>

            {/* <form onSubmit={handleOnSubmit}>
                <TextField onBlur={handleOnBlur} type="email" label="Email" variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form> */}


            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12} md={12}>
                        <img style={{ height: '250px', width: '250' }} src="https://i.ibb.co/C6tjFzf/adminimg-ai.png" alt="" srcset="" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <form onSubmit={handleOnSubmit}>
                            <TextField color='success' style={{ width: '60%' }} onBlur={handleOnBlur} type="email" label="Email" variant="standard" />
                            <Box sx={{ m: 2 }}><Button type='submit' variant="contained">Make Admin</Button></Box>
                        </form>
                    </Grid>

                </Grid>
            </Box>


        </div>
    );
};

export default MakeAdmin;