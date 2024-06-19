
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {

    return (
        <div style={{
            background: "black",
            color: "white",
            height: "200px",
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center"
        }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "90%",
                    margin: "auto",
                    maxWidth: "500px"
                }}>
                <div className='socialIconContainer'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/franklunanj/">
                        <InstagramIcon fontSize='large' />
                    </a>
                </div>
                <div className='socialIconContainer'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://x.com/franklunanj">
                        <TwitterIcon fontSize='large' />
                    </a>
                </div>
                <div className='socialIconContainer'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.youtube.com/channel/UChYupqDW91EDKfVHKZ-3-Eg">
                        <YouTubeIcon fontSize='large' />
                    </a>
                </div>
                <div className='socialIconContainer'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/FrankLunaNJ/">
                        <FacebookIcon fontSize='large' />
                    </a>
                </div>
                <div className='socialIconContainer'>
                    <a className='socialIconLink'
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/frank-luna-77809bb0/">
                        <LinkedInIcon fontSize='large' />
                    </a>
                </div>
            </div>
            <hr />
            <p>
                <a href="mailto:gardenstateperf@gmail.com"
                    style={{
                        color: "white"
                    }}
                >frank.luna23@gmail.com </a>
                •
                609-709-1656
            </p>
            <hr />

        </div>
    )

}
