import React from 'react';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../components/NavBar/NavBar.css';
import 'animate.css/animate.min.css';

// Components
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
            <div id="navbar">
                <nav className="sticky">
                    <div className="row">
                        <div className="col-sm">
                            <h3 className="navName">Marin Pavlinov Marinov</h3>
                        </div>
                        <ul className="col-sm main-nav ">
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
                        <div className="col-sm connectIcons">
                            <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                                <IosPaper fontSize="42px" />
                            </a>
                            <a href="https://github.com/marinov98">
                                <LogoGithub fontSize="42px" />
                            </a>
                            <a href="https://www.linkedin.com/in/marin-p-marinov/">
                                <LogoLinkedin fontSize="47px" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009602178957">
                                <LogoFacebook fontSize="47px" />
                            </a>
                            <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                                <MdMail fontSize="47px" />
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
                            <Button color="secondary" size="lg">
                                ⇧
                            </Button>
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
