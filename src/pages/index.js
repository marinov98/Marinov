import React from 'react';
// CSS
import './index.css';
import './queries.css';
import 'animate.css/animate.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './header';
import NavBar from './../components/NavBar/NavBar';
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import Education from '../components/Eduction/Education';

// Utility & Packages
import { Button } from 'reactstrap';
import { fadeIn, tada, bounce, slideInUp, slideInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Scrollchor } from 'react-scrollchor';
import ScrollAnimation from 'react-animate-on-scroll';
import NetlifyFooter from '../images/skills/netlify-footer.png';

const styles = {
    fadeIn: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    tada: {
        animation: 'x 1s',
        animationName: Radium.keyframes(tada, 'tada')
    },
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    },
    slideUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    slideDown: {
        animation: 'x 5s',
        animationName: Radium.keyframes(slideInDown, 'slideInDown')
    }
};

export default function IndexPage() {
    return (
        // NAVBAR
        <div id="index" className="container-fluid">
            <Header />
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <NavBar />
                </div>
            </StyleRoot>
            <div id="about-hidden" style={{ marginTop: '12px', visibility: 'hidden' }}>
                Marin P. Marinov
            </div>
            <StyleRoot>
                <div style={styles.slideUp}>
                    <About />
                </div>
            </StyleRoot>
            <Education />
            <div id="go-to-skills" className="row-fluid skills-separator">
                <h5>Technical Summary</h5>
            </div>
            <Skills />
            <div id="go-to-projects" className="row-fluid projects-separator">
                <h5>Most Recent Projects</h5>
            </div>
            <Projects />
            <footer id="fter" className="row-fluid">
                <div className="row">
                    <div className="up-btn col-sm-1">
                        <Scrollchor to="#index" animate={{ offset: 5, duration: 600 }}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeIn">
                                <Button color="secondary" size="lg">
                                    ⇧
                                </Button>
                            </ScrollAnimation>
                        </Scrollchor>
                    </div>
                    <div className="col-lg-10">
                        <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
                        <p>Powered By :</p>
                        <a href="https://www.netlify.com/">
                            <img src={NetlifyFooter}></img>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
