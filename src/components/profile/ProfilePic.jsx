import { Avatar } from '@mui/material';

const ProfilePic = () => {
    return (
        <div id='profile-photo'>
        <Avatar 
            sx={{ height: '300px', width: '300px' }}
            alt="makTezi" 
            src="../src/assets/img/profile-pic.png"
        />
        </div>
        
    )
}

export default ProfilePic