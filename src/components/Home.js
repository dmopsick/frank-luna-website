import React, {useEffect} from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-scroll';
import Button from '@mui/material/Button';

export default function Home() {
  useEffect(() => {
    // Preload all background images
    const imageUrls = [
      '/public/images/frank_aaron_judge.jpg',
      '/public/images/Mariano_Rivera.JPG',
      '/public/images/Oswaldo_Cabrera.png',
      '/public/images/Paul_ONeill.png',
      '/public/images/Elijah_Dunham.png',
      '/public/images/Boone_Johnny.png',
    ];

    const preloadImages = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    let myIndex = 1;
    let backgroundSlider;

    // Wait for all images to load before starting slideshow
    Promise.all(preloadImages)
        .then(() => {
          const x = document.querySelectorAll('.section-with-background-image');
          if (x.length === 0) return;

          // Start with first slide visible
          x[0].classList.add('active');

          // Start slideshow after images are loaded
          backgroundSlider = setInterval(() => {
            // Remove active class from all slides
            x.forEach((slide) => slide.classList.remove('active'));

            myIndex++;
            if (myIndex > x.length) {
              myIndex = 1;
            }

            // Add active class to current slide
            x[myIndex - 1].classList.add('active');
          }, 3000);
        })
        .catch((error) => {
          console.warn('Some images failed to load:', error);
          // Start slideshow anyway if some images fail
          const x = document.querySelectorAll('.section-with-background-image');
          if (x.length > 0) {
            x[0].classList.add('active');
            backgroundSlider = setInterval(() => {
              x.forEach((slide) => slide.classList.remove('active'));
              myIndex++;
              if (myIndex > x.length) {
                myIndex = 1;
              }
              x[myIndex - 1].classList.add('active');
            }, 3000);
          }
        });

    return () => {
      if (backgroundSlider) {
        clearInterval(backgroundSlider);
      }
    };
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
          color="secondary"
          size="large"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdrnMNrpZ3uC-2Y9h7rmdP386wjm9D1cKSdTkDypzc1Lw9QUg/viewform?usp=sf_link"
        >
          Join Email List
        </Button>
      </div>
    </div>
  );
}
