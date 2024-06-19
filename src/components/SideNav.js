
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
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
                     href="https://docs.google.com/forms/d/e/1FAIpQLSdrnMNrpZ3uC-2Y9h7rmdP386wjm9D1cKSdTkDypzc1Lw9QUg/viewform?usp=sf_link"
                     target="_blank"
                     rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Join Email List
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://www.instagram.com/franklunanj/"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <InstagramIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Instagram
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://x.com/franklunanj"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Twitter/X
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://www.youtube.com/channel/UChYupqDW91EDKfVHKZ-3-Eg"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <YouTubeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                YouTube
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://www.facebook.com/FrankLunaNJ/"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <FacebookIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Facebook
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' 
                    href="https://www.linkedin.com/in/frank-luna-77809bb0/"
                    target="_blank"
                    rel="noreferrer">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText>
                                LinkedIn
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
