import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SideNav from './SideNav';

const useStyles = makeStyles(theme => ({

    navBar: {
        background: "#000000",
        paddingRight: "0px !important",
        height: "80px",
        color: "white"
    },

    header: {
        fontFamily: "Bebas Neue !important",
        fontWeight: "bold !important",
        fontSize: "28px",
        color: "white",
        textDecoration: "none"
    }

}));

export default function Header(props) {
    const classes = useStyles();

    return (
     
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={classes.navBar}>
                        <SideNav />
                        <a className={classes.header} href ="/">
                            Outpost Jersey Shore
                        </a>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

        </React.Fragment>
    

    )
}

export function HideOnScroll(props) {
    const {children} = props;
    
    const trigger = useScrollTrigger({
        target: window
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
