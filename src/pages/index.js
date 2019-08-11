import React from 'react';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../components/NavBar/NavBar.css';
// Components
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import ScrollableAnchor from 'react-scrollable-anchor';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosPaper from 'react-ionicons/lib/IosPaper';
import MdMail from 'react-ionicons/lib/MdMail';
import { configureAnchors } from 'react-scrollable-anchor';
import { Button } from 'reactstrap';
import { goToTop } from 'react-scrollable-anchor';
import { removeHash } from 'react-scrollable-anchor';

export default function IndexPage() {
    configureAnchors({ offset: -10, scrollDuration: 1000, keepLastAnchorHash: false });
    return (
        // NAVBAR
        <div id="index">
            <div id="navbar">
                <nav className="sticky">
                    <div className="row">
                        <h3 className="navName">𝔐𝔞𝔯𝔦𝔫𝔬𝔳</h3>
                        <ul className="main-nav ">
                            <li>
                                <a href="#gotoAbout">About Me</a>
                            </li>
                            <li>
                                <a href="#gotoSkills">Skills</a>
                            </li>
                            <li>
                                <a href="#gotoProjects">Projects</a>
                            </li>
                        </ul>
                        <div className="col connectIcons">
                            <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                                <IosPaper fontSize="55px" />
                            </a>
                            <a href="https://github.com/marinov98">
                                <LogoGithub fontSize="55px" />
                            </a>
                            <a href="https://www.linkedin.com/in/marin-p-marinov/">
                                <LogoLinkedin fontSize="60px" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009602178957">
                                <LogoFacebook fontSize="60px" />
                            </a>
                            <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                                <MdMail fontSize="60px" beat="true" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <h1 style={{ marginTop: '72px' }}> 🅜🅐🅡🅘🅝 🅟. 🅜🅐🅡🅘🅝🅞🅥</h1>
            <ScrollableAnchor id={'gotoAbout'}>
                <About />
            </ScrollableAnchor>
            <div className="row-fluid skills-separator">
                <h5>Technical Summary</h5>
            </div>
            <ScrollableAnchor id={'gotoSkills'}>
                <Skills />
            </ScrollableAnchor>
            <ScrollableAnchor id={'gotoProjects'}>
                <div className="row-fluid projects-separator">
                    <h5>Most Recent Projects</h5>
                </div>
            </ScrollableAnchor>
            <Projects />
            <footer className="row-fluid">
                <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
                <Button
                    color="secondary"
                    onClick={() => {
                        removeHash();
                        goToTop();
                    }}
                >
                    Go to top
                </Button>
            </footer>
        </div>
    );
}
