
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
export default function SideNav() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <a className='linkNoDecoration' href="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/logo192.png"
                                    style={{
                                        width: "24px",
                                        height: "24px"
                                    }}
                                    alt="Home"
                                />
                            </ListItemIcon>
                            <ListItemText>
                            Home
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration'
                     href="https://theoutpost.gymmasteronline.com/portal/signup"
                     target="_blank"
                     rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DirectionsRunIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Join
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://forms.gle/ARkPTHWgBxu76Pny7"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ConnectWithoutContactIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Learn More
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>
            </List>

        </Box>
    );

    return (
        <div>
 
            <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{color: "white"}} /></Button>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
        
        </div>
    )
}
