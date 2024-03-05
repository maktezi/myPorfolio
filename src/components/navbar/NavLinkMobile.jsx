// import React from 'react';

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
            <div className="box-bounce bounce"></div>
        </div>
            <div className="my-menu">
                <div className="my-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menu-links">
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavLinkMobile;
