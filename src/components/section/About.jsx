import './section.css'
import aboutPic from '/src/assets/img/about-pic.png';
import experience from '/src/assets/img/experience.png';
import education from '/src/assets/img/education.png';

const About = () => {
    return (
    <>
        <h1 className="title">About Me</h1>
        <div id="about-wrapper">
            
            <div id="about-wrapper-img">
                <img className="about-img" src={aboutPic}/>
            </div>

            <div id="box-wrapper">
                <div className='box'>
                    <div>
                        <img className='box-icon' src={experience}/>
                        <h3 className='text-head'>Experience</h3>
                        <p className='text'>1 Year</p>
                        <p className='text'>Web Development</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <img className='box-icon' src={education}/>
                        <h3 className='text-head'>Education</h3>
                        <p className='text'>Bachelors Degree</p>
                        <p className='text'>Computer Engineering</p>
                    </div>
                </div>
                <div id='about-text' className='about-details'>
                    <p>Enthusiastic and detail-oriented website developer with a passion for crafting dynamic and visually appealing online experiences. Possessing a foundation in HTML, CSS, and JavaScript, ReactJS and Laravel for backend development. I am eager to leverage my skills to contribute effectively to web development projects.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default About