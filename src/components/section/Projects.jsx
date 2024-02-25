// import React from 'react'
import './section.css'
import Button from '@mui/material/Button';
import project0 from '/src/assets/img/project-0.png';
import project1 from '/src/assets/img/project-1.png';
import project2 from '/src/assets/img/project-2.png';
import project3 from '/src/assets/img/project-3.png';
import project4 from '/src/assets/img/project-4.png';
import project5 from '/src/assets/img/project-5.png';
import project6 from '/src/assets/img/project-6.png';

const Projects = () => {
    return (
    <>
        <h1 className="title">Projects</h1>
        <div id='project-main-wrapper'>
            <div id="project-wrapper">
                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project0}/>
                        <h3 className='project-title'>CRUD ReactJS, MUI, Laravel, SQL</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/crud'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project1}/>
                        <h3 className='project-title'>QR Code Attendance System</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/qr_attendance_system/'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://dolereg2023.app-gov.online/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                LIVE DEMO
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project2}/>
                        <h3 className='project-title'>Online Forms System</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/online-forms'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://app-gov.online/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                LIVE DEMO
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project3}/>
                        <h3 className='project-title'>IT Inventory System</h3>
                        <div>
                            <Button 
                                href='https://dole8inventory.freshfromuspng.store/'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                LIVE DEMO
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project4}/>
                        <h3 className='project-title'>GIP Monitoring System</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/gip-records'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project5}/>
                        <h3 className='project-title'>Supply Unit Inventory System</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/inventory-system'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project6}/>
                        <h3 className='project-title'>Wordpress Ecommerce</h3>
                        <div>
                            <Button 
                                href='https://freshfrom-us.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='contained' 
                                color='error' 
                                disableElevation
                            >
                                LIVE DEMO
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    
    </>
    )
}

export default Projects