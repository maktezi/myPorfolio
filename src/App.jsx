import './assets/style.css'
import './assets/mediaquery.css'
import Theme from "./components/Theme";
import LogoText from "./components/navbar/LogoText";
import NavLink from './components/navbar/NavLink';
import NavLinkMobile from './components/navbar/NavLinkMobile';
import Profile from './components/profile/Profile';
import ProfilePic from './components/profile/ProfilePic';
import About from './components/section/About';
import Experience from './components/section/Experience';

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

  </>
  )
}

export default App