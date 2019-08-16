import React from 'react';
// CSS
import './index.css';
import './../components/NavBar/NavBar.css';
import './queries.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './header';
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import Education from '../components/Eduction/Education';

// Utility & Packages
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosPaper from 'react-ionicons/lib/IosPaper';
import MdMail from 'react-ionicons/lib/MdMail';
import { Button } from 'reactstrap';
import { fadeIn, tada, bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Scrollchor from 'react-scrollchor';
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    tada: {
        animation: 'x 1s',
        animationName: Radium.keyframes(tada, 'tada')
    },
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
};

export default function IndexPage() {
    return (
        // NAVBAR
        <div id="index" className="container-fluid">
            <Header />
            <div id="navbar">
                <nav className="sticky container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3 className="nav-name">Marin Pavlinov Marinov</h3>
                        </div>
                        <ul className="col main-nav ">
                            <li>
                                <Scrollchor
                                    to="#about-hidden"
                                    animate={{ offset: 20, duration: 800 }}
                                >
                                    About Me
                                </Scrollchor>
                            </li>
                            <li>
                                <Scrollchor to="#skills" animate={{ offset: 20, duration: 800 }}>
                                    Skills
                                </Scrollchor>
                            </li>
                            <li>
                                <Scrollchor to="#projects" animate={{ offset: 20, duration: 800 }}>
                                    Projects
                                </Scrollchor>
                            </li>
                        </ul>
                        <div className="col connectIcons">
                            <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                                <IosPaper className="icon" fontSize="42px" />
                            </a>
                            <a href="https://github.com/marinov98">
                                <LogoGithub className="icon" fontSize="42px" />
                            </a>
                            <a href="https://www.linkedin.com/in/marin-p-marinov/">
                                <LogoLinkedin className="icon" fontSize="47px" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009602178957">
                                <LogoFacebook className="icon" fontSize="47px" />
                            </a>
                            <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                                <MdMail className="icon" fontSize="47px" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <div id="about-hidden" style={{ marginTop: '12px', visibility: 'hidden' }}>
                Something
            </div>
            <StyleRoot>
                <div style={styles.tada}>
                    <About />
                </div>
            </StyleRoot>
            <Education />
            <div className="row-fluid skills-separator">
                <h5>Technical Summary</h5>
            </div>
            <Skills />
            <div className="row-fluid projects-separator">
                <h5>Most Recent Projects</h5>
            </div>
            <Projects />
            <footer className="row-fluid">
                <div className="row">
                    <div className="button">
                        <Scrollchor to="#index" animate={{ offset: 20, duration: 800 }}>
                            <ScrollAnimation offset="300" animateIn="fadeIn" animateOut="fadeIn">
                                <Button color="secondary" size="lg">
                                    ⇧
                                </Button>
                            </ScrollAnimation>
                        </Scrollchor>
                    </div>
                    <div className="col">
                        <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
                        <p>Powered By :</p>
                        <a href="https://www.netlify.com/">
                            <img src={require('../images/skills/netlify-footer.png')}></img>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
