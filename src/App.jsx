import './assets/styles.css'
import './assets/mediaquery.css'
import Theme from "./components/Theme";
import LogoText from "./components/navbar/LogoText";
import NavLink from './components/navbar/NavLink';
import NavLinkMobile from './components/navbar/NavLinkMobile';
import Profile from './components/profile/Profile';
import ProfilePic from './components/profile/ProfilePic';
import About from './components/section/About';
import Experience from './components/section/Experience';
import Projects from './components/section/Projects';
import Contact from './components/section/Contact';

const App = () => {

  return (
  <>
    <div id='nav'>
      <nav id="desktop-nav">
        <LogoText/>
        <NavLink/>
      </nav>
      <nav id="mobile-nav">
        <NavLinkMobile/>
        <LogoText/>
      </nav>
      <nav id='theme'><Theme/></nav>
    </div>

    <section id='profile'>
        <ProfilePic/>
        <Profile/>
    </section>

    <section id='about'>
        <About/>
    </section>

    <section id='experience'>
        <Experience/>
    </section>

    <section id='projects'>
        <Projects/>
    </section>

    <section id='contact'>
        <Contact/>
    </section>

  </>
  )
}

export default App