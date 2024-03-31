import Button from '@mui/material/Button';
import resumepdf from '/src/assets/NierrasResume.pdf';
import indeed from '/src/assets/img/indeed.png';
import github from '/src/assets/img/github.png';
import fb from '/src/assets/img/fb.png';
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import '../section/section.css'

const Profile = () => {

    const handleDownload = () => {

        const resume = resumepdf;
        
        const link = document.createElement('a');
        
        link.href = resume;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
    <>
    <div className='profile-detail-wrapper'>
        <div className='profile-detail'>
            <p className="profile-text">Hey I am</p>
            <h1 className="profile-name">MARK</h1>
            <h3 className="profile-skill">Web Developer</h3>
            <div>
                <Button 
                    id='profileButton'
                    className='downloadBtn'
                    variant='contained'
                    color='error' 
                    onClick={handleDownload}
                    disableElevation
                >
                    <DownloadIcon className='icon-spacing'/>Resume
                </Button>
                <Button href='#contact' id='profileButton' variant='outlined' color='error' disableElevation><AlternateEmailIcon className='icon-spacing'/>Contact</Button>
            </div>
            <div>
                <a href='https://profile.indeed.com/p/markn-w33vjj5' target='_blank'><img id='profileIcon' src={indeed}></img></a>
                <a href='https://github.com/maktezi' target='_blank'><img id='profileIcon' src={github}></img></a>
                <a href='https://www.facebook.com/mlcnierras' target='_blank'><img id='profileIcon' src={fb}></img></a>
            </div>
        </div>
    </div>
    </>
    )
}

export default Profile
