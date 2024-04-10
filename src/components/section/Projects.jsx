// import React from 'react'
import './section.css'
import Button from '@mui/material/Button';
import project1 from '/src/assets/img/project-1.png';
import project2 from '/src/assets/img/project-2.png';
import project3 from '/src/assets/img/project-3.png';
import project4 from '/src/assets/img/project-4.png';
import project5 from '/src/assets/img/project-5.png';
import project6 from '/src/assets/img/project-6.png';
import project7 from '/src/assets/img/project-7.png';
import project8 from '/src/assets/img/project-8.png';
import project9 from '/src/assets/img/project-9.png';

const Projects = () => {
    return (
    <>
        <h1 className="title">Projects</h1>
        <div id='project-main-wrapper'>
            <div id="project-wrapper">

            <div className="project-box">
                    <div className="project-box-details">
                        <img className='project-pic' src={project9}/>
                        <h3 className='project-title'>Point of Sale - (ReactJS, MUI, Laravel, MySQL)</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/project-pos'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://pointofsales101.vercel.app'
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
                        <img className='project-pic' src={project7}/>
                        <h3 className='project-title'>Space X App - (NuxtJS, Vuetify, GraphQL, Pinia)</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/nuxtproject'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://mak-nuxtvgp.vercel.app'
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
                        <img className='project-pic' src={project1}/>
                        <h3 className='project-title'>QR Code Attendance System<br/>Admin Login - email: admin@mail.com | password: admin1234</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/qr_attendance_system/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://dolejobfair2023.freshfromuspng.com/'
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
                        <img className='project-pic' src={project8}/>
                        <h3 className='project-title'>Task Management System<br/>Admin Login - email: admin@mail.com | password: admin1234</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/taskmanagement'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://taskman.freshfromuspng.com'
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
                        <img className='project-pic' src={project2}/>
                        <h3 className='project-title'>Online Forms System<br/>Admin Login - email: admin@mail.com | password: admin1234</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/online-forms'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://comelec-bske2023.freshfromuspng.com/'
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
                        <h3 className='project-title'>Supply Unit Inventory System<br/>Admin Login - email: admin@mail.com | password: admin1234</h3>
                        <div>
                            <Button 
                                href='https://github.com/maktezi/inventory-system'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                                disableElevation
                            >
                                GITHUB
                            </Button>
                            <Button 
                                href='https://inventory101.freshfromuspng.com'
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
                        <img className='project-pic' src={project6}/>
                        <h3 className='project-title'>Wordpress Projects</h3>
                        <div>
                            <Button 
                                href='https://www.brooklynelectricianservice.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Landing Page 1
                            </Button>
                            <Button 
                                href='https://www.dallasyourdrywallguys.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Landing Page 2
                            </Button>
                            <Button 
                                href='https://www.sfelectricmasters.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Landing Page 3
                            </Button>
                            <Button 
                                href='https://www.hartfordelectricians.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Landing Page 4
                            </Button>
                            <Button 
                                href='https://www.orlandoelectricianservice.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Landing Page 5
                            </Button>
                            <Button 
                                href='https://freshfrom-us.com/'
                                target='_blank'
                                id='projectButton' 
                                variant='outlined' 
                                color='error' 
                            >
                                Online Store
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