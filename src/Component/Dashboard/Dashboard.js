import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import MakeAdmin from './MakeAdmin/MakeAdmin';
const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/';

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLogout = () => {
        logOut();
        history.push('/')
    }


    const drawer = (

        <div >

            <img style={{ backgroundColor: 'none' }} src="https://i.ibb.co/xs2LQ9v/actionshark-removebg-preview.png" style={{ width: 250, height: 'auto' }} />
            <Divider />
            <div sx={{ textAlign: 'start' }}>




                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to="/"><Button style={{ color: 'black', }}> <HomeIcon /> <span style={{ marginLeft: 2 }}>Home</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to={`${url}/pay`}><Button style={{ color: 'black', }}> <AttachMoneyIcon /> <span style={{ marginLeft: 2 }}>Payments</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', }} to={`${url}/myorder`}><Button style={{ color: 'black', }}> <ShopTwoIcon /> <span style={{ marginLeft: 2 }}>My Orders</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', }} to={`${url}/orderreview`}><Button style={{ color: 'black', }}> <RateReviewIcon /> <span style={{ marginLeft: 2 }}>Review</span></Button></Link>
                <br />

                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to={`${url}/makeAdmin`}><Button style={{ color: 'black', }}>< AdminPanelSettingsIcon ></AdminPanelSettingsIcon> <span style={{ marginLeft: 2 }}>Make Admin</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to={`${url}/manageAllOrders`}><Button style={{ color: 'black', }}><ManageAccountsIcon></ManageAccountsIcon> <span style={{ marginLeft: 2 }}>Manage Orders</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to={`${url}/AddProdut`}><Button style={{ color: 'black', }}><AddCircleIcon></AddCircleIcon> <span style={{ marginLeft: 2 }}>Add Product</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to={`${url}/ManageProduts`}><Button style={{ color: 'black', }}><ManageSearchIcon /> <span style={{ marginLeft: 2 }}>Manage Product</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', textAlign: 'start' }} to="#"><Button style={{ color: 'black', }}><AccountCircle></AccountCircle><span style={{ marginLeft: 2 }}>{user.displayName}</span></Button></Link>
                <br />
                <Link style={{ textDecoration: 'none', }} to='#'><Button onClick={handleLogout} style={{ color: 'black', }}> <ExitToAppIcon /> <span style={{ marginLeft: 2 }}>Logout</span></Button></Link>
                <br />


            </div>



        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar

                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'cornflowerblue'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    {/* <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route> */}
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    {/* <Route path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </Route> */}
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
