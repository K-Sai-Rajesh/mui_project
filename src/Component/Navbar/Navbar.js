import {    AppBar, IconButton, 
            Toolbar, Typography, Button, 
            useMediaQuery, SwipeableDrawer, 
            List, ListItem, ListItemButton, Box } from "@mui/material"
import { Close, Menu, Grid3x3, Article } from "@mui/icons-material"
import {Link} from 'react-router-dom'
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
// import styled from "@emotion/styled"


export const Navbar = () => {

    const newTheme = useTheme()
    const isMatch = useMediaQuery(newTheme.breakpoints.down('md'))

    const [state,setState] = useState(false)
    const navigate = useNavigate()

    function onToggle(){
        setState(!state)
    }

    return(
        <>
        <AppBar position="static">
        <Toolbar>
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
                        <List sx={{
                            display:'flex',
                            direction:'row',
                            marginLeft:'auto'
                        }}>
                            <ListItem key='1'>
                                <ListItemButton onClick={() => navigate('/grid') }>
                                    <Grid3x3 />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key='2'>
                                <ListItemButton onClick={() => navigate('/page') }>
                                    <Article />
                                </ListItemButton>
                            </ListItem>
                        </List>
                </> :
                <>
                <Button onClick={() => onToggle()}
                            startIcon={<Menu/>}
                            variant='primary'
                            sx={{
                                marginLeft:'auto'
                            }}
                    >
                        
                    </Button>
                <SwipeableDrawer 
                        open={state}
                        anchor='left'
                        onClose={() => onToggle()}
                        onOpen={() => onToggle()}
                >
                    <Box
                        sx={{ width : 250 }}
                        role="presentation"
                        >
                        <Button onClick={() => onToggle()}
                                startIcon={<Close />}
                                variant='primary'
                                sx={{
                                    marginLeft:'auto'
                                }}
                        >
                            
                        </Button>
                        <List>
                            <ListItem key=''>
                                <ListItemButton onClick={() => navigate('/grid') }>
                                    <Grid3x3 />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key='2'>
                                <ListItemButton onClick={() => navigate('/page') }>
                                    <Article />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </SwipeableDrawer>
                </>
            }
            
        </Toolbar>
        </AppBar>
        </>
    )
}