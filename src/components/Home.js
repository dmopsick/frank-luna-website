import React, {useEffect} from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-scroll';
import Button from '@mui/material/Button';

export default function Home() {
  useEffect(() => {
    let myIndex = 1; // Holds place in the slideshow

    const backgroundSlider = setInterval(() => {
      const x = document.querySelectorAll('.section-with-background-image');

      for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      myIndex++;
      if (myIndex > x.length) {
        myIndex = 1;
      }
      // Hide previous
      x[myIndex - 1].style.display = 'block';
    }, 3000);

    return () => clearInterval(backgroundSlider);
  }, []);

  return (
    <div className="home-container">
      <div className="section">
        <div id="judge-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>

        <div id="mariano-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>

        <div id="boone-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>

        <div id="paul-oneil-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>

        <div id="oswaldo-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>

        <div id="elijah-slide" className="section-with-background-image">
          <div className="landing-page-logo-container">
            <Link
              to="section2"
              smooth={true}
              duration={500}
              style={{
                color: 'white',
                flexBasis: '100%',
              }}>
              <ArrowDownwardIcon
                className="moving-arrow"
                style={{fontSize: '96px'}}
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="section2" className="long-section">
        <h1 className="section-header">Meet Frank Luna</h1>
        <p className="section-caption">
          Frank Luna, who owns and operates Upstage Strategies LLC, has spent
          his entire adult life working on campaigns and building community. His
          career has included multiple successful political campaigns, a few years
          as an Infantryman in the Army National Guard, bartending along the
          Jersey Shore, partnering in Outpost Jersey Shore – a strength and
          conditioning facility in Monmouth County, and coordinating hundreds of
          thousands of dollars in successful events with professional athletes
          and public figures. Not only is Frank a successful public affairs
          professional, but he gives back to the community relentlessly,
          volunteering with Jersey Shore Dream Center, Covenant House New Jersey,
          and the New Jersey Vietnam Veterans&apos; Memorial Foundation. Frank has
          recently received awards and recognition from the Asbury Park Little
          League, Long Branch Little League, Court Appointed Special Advocates
          for Children (CASA) of Middlesex County, and the Vin Gopal Civic
          Association (&quot;2022 Community Trailblazers Award&quot;).
        </p>

        <Link
          to="training"
          smooth={true}
          duration={500}
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <h1>
            JOIN{' '}
            <ArrowDownwardIcon
              className="moving-arrow"
              fontSize="large"
            />
          </h1>
        </Link>
      </div>

      <div id="training" className="short-section">
        <h1 className="section-header">Connect with Frank</h1>

        <Button
          className="button"
          target="_blank"
          variant="contained"
          size="large"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrnMNrpZ3uC-2Y9h7rmdP386wjm9D1cKSdTkDypzc1Lw9QUg/viewform?usp=sf_link"
        >
          Join Email List
        </Button>
      </div>
    </div>
  );
}
