import React, { useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "white"
    },

    homeContainer: {
        color: "white",
        background: "black",
        textAlign: "center"
    },

    hoursLink: {
        color: "skyblue",
        fontSize: "32px",
        margin: "auto"
    },

    testimonialText: {
        margin: "auto",
        width: "90%",
        marginBottom: "20px"
    },

    landingPageLogoContainer: {
        zIndex: "100",
        position: "absolute",
        width: "100%",
        top: "25%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
    },

    landingPageLogo: {
        width: "50%",
        flexBasis: "20%",
        maxHeight: "500px",
        maxWidth: "250px",
        opacity: "60%"
    }

}));

export default function Home() {
    const classes = useStyles();

    useEffect(() => {
        var myIndex = 1; // Holds place in the slideshow

        const backgroundSlider = setInterval(() => {
            var i;
            var x = document.querySelectorAll('.sectionWithBackgroundImage');

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            // Hide previous   
            x[myIndex - 1].style.display = "block";

        }, 3000);


        return () => clearInterval(backgroundSlider);
    });

    return (
        <div className={classes.homeContainer}>
            <div className="section">
                <div id="mariano-slide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>

                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Frank Luna Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="boone-slide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Frank Luna Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="paul-oneil-slide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Frank Luna Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="oswaldo-slide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Frank Luna Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="elijah-slide" className='sectionWithBackgroundImage'>
                    <div className={classes.movingArrowContainer}>
                        <div class={classes.landingPageLogoContainer}>
                            <img src="/logo1200.png"
                                alt="Frank Luna Logo"
                                className={classes.landingPageLogo}
                            />

                            <Link to="section2"
                                smooth={true}
                                duration={500}
                                style={{
                                    color: "white",
                                    flexBasis: "100%"
                                }}>
                                <ArrowDownwardIcon className={classes.movingArrow} style={{ fontSize: "96px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="section2" className='longSection'>
                <h1 className='sectionHeader'>Meet Frank Luna</h1>
                <p className='sectionCaption'>
                    Frank Luna, who owns and operates Upstage Strategies LLC, has spent his entire adult life working on campaigns and building community.
                    His career has included multiple successful political campaigns, a few years as an Infantryman in the Army National Guard, bartending along the Jersey Shore, partnering in Outpost Jersey Shore – a strength and conditioning facility in Monmouth County, and coordinating hundreds of thousands of dollars in successful events with professional athletes and public figures. Not only is Frank a successful public affairs professional, but he gives back to the community relentlessly, volunteering with Jersey Shore Dream Center, Covenant House New Jersey, and the New Jersey Vietnam Veterans’ Memorial Foundation. Frank has recently received awards and recognition from the Asbury Park Little League, Long Branch Little League, Court Appointed Special Advocates for Children (CASA) of Middlesex County, and the Vin Gopal Civic Association ("2022 Community Trailblazers Award").
                </p>

                <Link to="training"
                    smooth={true}
                    duration={500}
                    style={{
                        textDecoration: "none",
                        color: "white"
                    }}
                >
                    <h1>JOIN <ArrowDownwardIcon className={classes.movingArrow} fontSize="large" /></h1>
                </Link>
            </div>

            <div id="training" className='section'>
                <h1 className='sectionHeader'>Connect with Frank</h1>

                <Button className='button'
                    target="_blank"
                    variant="contained"
                    size="large"
                    href="https://theoutpost.gymmasteronline.com/portal/signup">
                    Join Email List
                </Button>

                <Button className='button'
                    target="_blank"

                    variant="contained"
                    size="large"
                    href="https://forms.gle/ARkPTHWgBxu76Pny7">
                    Contact Frank
                </Button>
            </div>
        </div>

    )
}
