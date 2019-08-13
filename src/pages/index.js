import React from 'react';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../components/NavBar/NavBar.css';
// Components
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import Education from '../components/Eduction/Education';

// Packages
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
import { fadeIn, tada, bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

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
    configureAnchors({ offset: -10, scrollDuration: 1000, scrollUrlHashUpdate: false });
    return (
        // NAVBAR
        <div id="index">
            <div id="navbar">
                <nav className="sticky">
                    <div className="row">
                        <h3 className="navName">Marin Pavlinov Marinov</h3>
                        <ul className="main-nav ">
                            <li>
                                <a href="#gotoAbout">About Me</a>
                            </li>
                            <li>
                                <a href="#gotosummary">Skills</a>
                            </li>
                            <li>
                                <a href="#gotoProjects">Projects</a>
                            </li>
                        </ul>
                        <div className="col connectIcons">
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

            <div style={{ marginTop: '12px', visibility: 'hidden' }}>Something</div>
            <ScrollableAnchor id={'gotoAbout'}>
                <div></div>
            </ScrollableAnchor>
            <StyleRoot>
                <div style={styles.tada}>
                    <About />
                </div>
            </StyleRoot>
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <Education />
                </div>
            </StyleRoot>
            <div className="row-fluid skills-separator">
                <h5>Technical Summary</h5>
            </div>
            <ScrollableAnchor id={'gotosummary'}>
                <div style={{ listStyle: 'none' }}></div>
            </ScrollableAnchor>
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <Skills />
                </div>
            </StyleRoot>
            <ScrollableAnchor id={'gotoProjects'}>
                <div></div>
            </ScrollableAnchor>
            <div className="row-fluid projects-separator">
                <h5>Most Recent Projects</h5>
            </div>
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <Projects />
                </div>
            </StyleRoot>
            <footer className="row-fluid">
                <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
                <Button
                    color="secondary"
                    size="lg"
                    onClick={() => {
                        removeHash();
                        goToTop();
                    }}
                >
                    ⇧
                </Button>
            </footer>
        </div>
    );
}
