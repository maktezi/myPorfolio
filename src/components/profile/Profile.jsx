import Button from '@mui/material/Button';

const Profile = () => {
    return (
    <>
    <div className='profile-detail-wrapper'>
        <div className='profile-detail'>
            <p className="profile-text">Hello, I`m</p>
            <h1 className="profile-name">MARK</h1>
            <h3 className="profile-skill">Web Developer</h3>
            <div>
                <Button href='./src/assets/resume.pdf' id='profileButton' variant='contained' color='error'>DOWNLOAD CV</Button>
                <Button href='#' id='profileButton' variant='outlined' color='warning'>CONTACT INFO</Button>
            </div>
            <div>
                <a href='https://profile.indeed.com/p/markn-w33vjj5' target='_blank'><img id='profileIcon' src='./src/assets/img/indeed.png'></img></a>
                <a href='https://github.com/maktezi' target='_blank'><img id='profileIcon' src='./src/assets/img/github.png'></img></a>
                <a href='https://www.facebook.com/mlcnierras' target='_blank'><img id='profileIcon' src='./src/assets/img/fb.png'></img></a>
            </div>
        </div>
    </div>
    </>
    )
}

export default Profile