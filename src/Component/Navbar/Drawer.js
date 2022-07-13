import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Tab, Tabs, Toolbar, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export default function TemporaryDrawer() {

    const newTheme = useTheme()
    const isMatch = useMediaQuery(newTheme.breakpoints.down('sm'))
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Link to='/grid' style={{
                textDecoration:'none'
            }}>
                <Typography
                    variant="h6"
                    color='#fff'
                >
                    Grid
                </Typography>
            </Link>
                
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
            Photos
            </Typography>

            {
                !isMatch ? 
                <>
                    <Tabs value='0' sx={{
                            margin:'auto'
                        }} aria-label="basic tabs example">
                        <Tab label="Item One" value='1' />
                        <Tab label="Item Two"  value='2' />
                        <Tab label="Item Three" value='3' />
                    </Tabs>

                </> :
                <>
                    <React.Fragment key={"top"}>
                    <Button onClick={toggleDrawer("left", true)}
                            startIcon={<Menu/>}
                            variant='primary'
                    >   
                        
                    </Button>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    </React.Fragment>
                </>
            }

            
        </Toolbar>
        </AppBar>
      
    </div>
  );
}
