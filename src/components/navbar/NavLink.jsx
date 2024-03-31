import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HandymanIcon from '@mui/icons-material/Handyman';
import ContactsIcon from '@mui/icons-material/Contacts';

const NavLink = () => {
    return (
        <div id='navLinks'>
        <div className="stage">
            <div className="box-b1 bounce"></div>
        </div>
            <a className='nav-link' href={"#about"}><InfoIcon className='nav-icon icon-spacing'/>About</a>
            <a className='nav-link' href={"#experience"}><BusinessCenterIcon className='nav-icon icon-spacing'/>Experience</a>
            <a className='nav-link' href={"#projects"}><HandymanIcon className='nav-icon icon-spacing'/>Projects</a>
            <a className='nav-link' href={"#contact"}><ContactsIcon className='nav-icon icon-spacing'/>Contact</a>
        </div>
    )
}

export default NavLink