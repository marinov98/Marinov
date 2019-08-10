import React from 'react';
import NavBar from './../components/NavBar/NavBar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
    <div id="index">
        <div id="nav">
            <NavBar />
        </div>
        <h1 style={{ marginTop: '70px' }}>Hello and Welcome to my Website!</h1>
        <h3>My name is 🅜🅐🅡🅘🅝 🅟. 🅜🅐🅡🅘🅝🅞🅥</h3>
        <footer className="row-fluid"></footer>
    </div>
);

export default IndexPage;
