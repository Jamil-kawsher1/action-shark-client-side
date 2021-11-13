import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import LoginIcon from "@mui/icons-material/Login";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import useAuth from '../../Hooks/useAuth';


const Navigationbar = () => {
    const [state, setState] = React.useState({
        left: false
    });
    const { user, logOut } = useAuth({});

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItem>
                    <ShoppingBasketIcon></ShoppingBasketIcon><Link to='/allproduts' style={{ textDecoration: 'none', marginLeft: 3 }}>Explore Products
                    </Link>

                </ListItem>
                <ListItem>


                    <DashboardIcon></DashboardIcon><Link style={{ textDecoration: 'none', marginLeft: 3 }} to='/dashboard'>Dashboard
                    </Link>

                </ListItem>
                {user.email && <ListItem>
                    <PersonIcon sx={{ mr: 1 }}></PersonIcon>
                    {user.displayName}
                </ListItem>}
                {user.email ? <ListItem onClick={logOut}>
                    <LogoutIcon sx={{ mr: 1 }}></LogoutIcon>
                    Logout
                </ListItem> : <ListItem >
                    <LoginIcon></LoginIcon> <Link style={{ textDecoration: 'none', marginLeft: 3 }} to='/login'>Login
                    </Link>


                </ListItem>}
            </List>
            <Divider />
            <List></List>
        </Box >
    );
    return (
        <div>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: 'black', padding: 10, textAlign: 'end' }}>
                        <IconButton
                            size="large"
                            edge="start"

                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                            {


                                <Box sx={{ display: { xs: 'block', md: 'none', lg: 'none', sm: 'none' } }}>
                                    {["left"].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <MenuIcon style={{ color: 'white' }} onClick={toggleDrawer(anchor, true)}></MenuIcon>

                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
                                                {list(anchor)}
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </Box>
                            }

                        </IconButton>
                        <Link to='/' style={{ textDecoration: 'none' }}>  <img src="https://i.ibb.co/xs2LQ9v/actionshark-removebg-preview.png" style={{ width: 250, height: 'auto' }} /></Link>
                        <Grid container

                            spacing={2}>
                            <Grid sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'block' } }} item md={12}>
                                <div><Link to='/allproduts' style={{ textDecoration: 'none', color: 'white', margin: 10 }}>Explore Produts</Link> {user.email && <Link style={{ textDecoration: 'none', color: 'white', margin: 10 }} to='/dashboard' >Dashboard</Link>} {user.email && <span style={{ marginLeft: 200 }}>{user.displayName}</span>} {user.email && <Button onClick={logOut} variant="contained">Logout</Button>} {!user.email && < Link style={{ textDecoration: 'none', color: 'white' }} to='login'>Login</Link>} </div>

                            </Grid>

                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>

        </div >
    );
};

export default Navigationbar;