import './section.css'

const About = () => {
    return (
    <>
        <h1 className="title">About Me</h1>
        <div id="about-wrapper">
            
            <div id="about-wrapper-img">
                <img className="about-img" src="./src/assets/img/about-pic.png"></img>
            </div>

            <div id="box-wrapper">
                <div className='box'>
                    <div>
                        <img className='box-icon' src='./src/assets/img/experience.png'></img>
                        <h3 className='text-head'>Experience</h3>
                        <p className='text'>1 Year</p>
                        <p className='text'>Web Development</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <img className='box-icon' src='./src/assets/img/education.png'></img>
                        <h3 className='text-head'>Education</h3>
                        <p className='text'>Bachelors Degree</p>
                        <p className='text'>Computer Engineering</p>
                    </div>
                </div>
                <div className='about-details'>
                    <p>Enthusiastic and detail-oriented website developer with a passion for crafting dynamic and visually appealing online experiences. Possessing a foundation in HTML, CSS, and JavaScript, ReactJS and Laravel for backend development. I am eager to leverage my skills to contribute effectively to web development projects.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default About