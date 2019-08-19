import React from 'react';
// CSS
import './index.css';
import './queries.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './header';
import NavBar from './../components/NavBar/NavBar';
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import Education from '../components/Eduction/Education';

// Utility & Packages
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
            <NavBar />
            <div id="about-hidden" style={{ marginTop: '12px', visibility: 'hidden' }}>
                Marin P. Marinov
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
            <footer id="fter" className="row-fluid">
                <div className="row">
                    <div className="button">
                        <Scrollchor to="#index" animate={{ offset: 20, duration: 800 }}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn">
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
