import React from 'react';
// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from './../components/NavBar/NavBar';
import About from './../components/About/About';
import Skills from './../components/Skills/Skills';

const IndexPage = () => (
    <div id="index">
        <NavBar />
        <h1 style={{ marginTop: '72px' }}> 🅜🅐🅡🅘🅝 🅟. 🅜🅐🅡🅘🅝🅞🅥</h1>
        <About />
        <Skills />
        <footer className="row-fluid"></footer>
    </div>
);

export default IndexPage;
