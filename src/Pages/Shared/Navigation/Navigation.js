import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Navigation = () => {
    const [state, setState] = React.useState(false);
    const { user, logOut } = useAuth();
    console.log(user)
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },
        },
        navContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
            [theme.breakpoints.up('sm')]: {
                display: 'flex',
                alignItems: 'center',
            },

        }
    });

    const { navIcon, navContainer } = useStyle();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => setState(true)}
                            className={navIcon}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Box className={navContainer}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                                <Button color="inherit">Explore</Button>
                            </Link>
                            {
                                user?.email ?
                                    <>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                            <Button color="inherit">Dashboard</Button>
                                        </Link>
                                        <span >Hello, {user?.displayName}</span>
                                        <img style={{ height: 40, width: 40, borderRadius: '50%', marginLeft: '5px' }} src={user?.photoURL} alt="" />
                                        <Button onClick={logOut} color="inherit">Log Out</Button>
                                    </> :
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </Link>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link to="/explore" style={{ textDecoration: 'none', color: '#000' }}>Explore</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                {
                                    user?.email ?
                                        <>
                                            <ListItem button>
                                                <ListItemText>
                                                    <Link to="/dashboard" style={{ textDecoration: 'none', color: '#000' }}>Dashboard</Link>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText>
                                                    <span>Hello, {user?.displayName}</span>
                                                    <img style={{ height: 40, width: 40, borderRadius: '50%', marginLeft: '5px' }} src={user?.photoURL} alt="" />
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                            <ListItem button>
                                                <ListItemText>
                                                    <Button onClick={logOut} color="inherit" style={{ padding: 0 }}>Log Out</Button>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                        </>
                                        :
                                        <>
                                            <ListItem button>
                                                <ListItemText>
                                                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>Login</Link>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                        </>
                                }

                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;