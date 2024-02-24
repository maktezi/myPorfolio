import { Avatar } from '@mui/material';
import profilePic from '/src/assets/img/profile-pic.png'

const ProfilePic = () => {
    return (
        <div id='profile-photo'>
        <Avatar 
            sx={{ 
                height: '300px', 
                width: '300px',
            }}
            alt="makTezi" 
            src={profilePic}
        />
        </div>
        
    )
}

export default ProfilePic