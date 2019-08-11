import React from 'react';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from './../components/NavBar/NavBar';
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';

const IndexPage = () => (
    <div id="index">
        <NavBar />
        <h1 style={{ marginTop: '72px' }}> 🅜🅐🅡🅘🅝 🅟. 🅜🅐🅡🅘🅝🅞🅥</h1>
        <About />
        <div className="row-fluid skills-separator">
            <h5>Technical Summary</h5>
        </div>
        <Skills />
        <div className="row-fluid projects-separator">
            <h5>Most Recent Projects</h5>
        </div>
        <Projects />
        <footer className="row-fluid">
            <p>Copyright &copy; 2019 by Marin Marinov. All rights reserved</p>
        </footer>
    </div>
);

export default IndexPage;
