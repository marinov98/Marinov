import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Scrollchor } from 'react-scrollchor';
// Utility & Packages
import { Button } from 'reactstrap';
import Education from '../components/Eduction/Education';
import NetlifyFooter from '../images/skills/netlify-footer.png';
import About from './../components/About/About';
import NavBar from './../components/NavBar/NavBar';
import Projects from './../components/Projects/Projects';
import Skills from './../components/Skills/Skills';
// Components
import Header from './header';
// CSS
import './index.css';
import './queries.css';

export default function IndexPage() {
    return (
        <div id="index" className="container-fluid">
            <Header />
            <div data-sal="flip-up" data-sal-duration="600">
                <NavBar />
            </div>
            <div id="about-hidden" style={{ marginTop: '12px', visibility: 'hidden' }}>
                Marin P. Marinov
            </div>
            <div data-sal="slide-up" data-sal-duration="600">
                <About />
            </div>
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
                <div className="row-fluid copyright-netlify">
                    <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
                    <p>Powered By :</p>
                    <a href="https://www.netlify.com/">
                        <img src={NetlifyFooter}></img>
                    </a>
                </div>
                <div className="up-btn row-fluid" data-sal="fade">
                    <Scrollchor to="#index" animate={{ offset: 5, duration: 600 }}>
                        <Button color="secondary">⇧</Button>
                    </Scrollchor>
                </div>
            </footer>
        </div>
    );
}
