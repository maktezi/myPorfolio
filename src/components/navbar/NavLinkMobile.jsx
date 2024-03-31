// import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HandymanIcon from '@mui/icons-material/Handyman';
import ContactsIcon from '@mui/icons-material/Contacts';


const NavLinkMobile = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".my-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    };

    return (
        <>
        <div className="stage">
            <div className="box-b1 bounce"></div>
        </div>
            <div className="my-menu">
                <div className="my-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menu-links">
                    <li><a href="#about" onClick={toggleMenu}><InfoIcon className='nav-icon icon-spacing'/>About</a></li>
                    <li><a href="#experience" onClick={toggleMenu}><BusinessCenterIcon className='nav-icon icon-spacing'/>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}><HandymanIcon className='nav-icon icon-spacing'/>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}><ContactsIcon className='nav-icon icon-spacing'/>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavLinkMobile;
