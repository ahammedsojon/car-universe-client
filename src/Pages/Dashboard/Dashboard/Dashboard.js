import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { CircularProgress } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Home from '../../Home/Home/Home';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../Add Product/AddProduct';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { user, admin, logOut, loading } = useAuth();
  console.log(admin, user)
  if(loading){
    return <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress />
  </Box>
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to="/" style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
          <ListItem button>
            <ListItemIcon>
              <i className="fas fa-home"></i>
            </ListItemIcon>
            <ListItemText primary="Home">
            </ListItemText>
          </ListItem>
        </Link>

        {
          !admin ? <>
          <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}> 
              <ListItem button>
                <ListItemIcon>
                  <i className="fab fa-amazon-pay"></i>
                </ListItemIcon>
                <ListItemText primary="Pay">
                </ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/myOrders`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-shopping-cart"></i>
                </ListItemIcon>
                <ListItemText primary="My Orders">
                </ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/addReview`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-american-sign-language-interpreting"></i>
                </ListItemIcon>
                <ListItemText primary="Review">
                </ListItemText>
              </ListItem>
            </Link>
          </>
            :
            <>
              <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-user-cog"></i>
                  </ListItemIcon>
                  <ListItemText primary="Make Admin">
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to={`${url}/maangeAllOrders`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-shopping-cart"></i>
                  </ListItemIcon>
                  <ListItemText primary="Manage All Orders">
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-plus-circle"></i>
                  </ListItemIcon>
                  <ListItemText primary="Add Product">
                  </ListItemText>
                </ListItem>
              </Link>
              <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
                <ListItem button>
                  <ListItemIcon>
                    <i className="fas fa-tasks"></i>
                  </ListItemIcon>
                  <ListItemText primary="Manage Products">
                  </ListItemText>
                </ListItem>
              </Link>
            </>

        }

        <Link to="/" style={{ textDecoration: 'none', color: '#757575', fontWeight: 'bold' }}>
        <ListItem button onClick={logOut}>
            <ListItemIcon>
              <i className="fas fa-sign-out-alt"></i>
            </ListItemIcon>
            <ListItemText primary="Log Out">
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
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
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
           <AdminRoute path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </AdminRoute>
           <AdminRoute path={`${path}/maangeAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
           <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
           <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
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