import * as React from 'react'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Navbar () {
    const [ drawer, setDrawer ] = React.useState( false )
    const [modal, setModal] = React.useState( false )
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <>
            <Box sx={ { flexGrow: 1 } }>
                <AppBar className="bg-black text-white" position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={ { mr: 2 } }
                            onClick={ () => { setDrawer( true ) } }
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                            StepUp Quiz
                        </Typography>
                        <Button onClick={() => setModal(true)} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Drawer anchor="left" open={ drawer } onClose={() => setDrawer(false)}>
                    <List sx={{width : "67vw", padding : "1rem"}}>
                        <Link href="/Profile">
                            <ListItem alignItems="flex-start" button>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </ListItemIcon>
                                <ListItemText> My Profile </ListItemText>
                            </ListItem>
                        </Link> 
                    </List>
                </Drawer>
            </Box>
            <Modal open={modal} onClose={() => setModal(false)}>
                <Box className="bg-white p-4">
                    <Button className="bg-white p-4 text-black"> Login with Google </Button>
                </Box>
            </Modal>
        </>
    )
}