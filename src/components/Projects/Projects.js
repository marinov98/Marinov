import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div className="row-fluid" id="projects">
            <div className="row allProjects">
                <div className="calculator-project col-sm project">
                    <h4 style={{ fontWeight: '600' }}>Statistical Calculator</h4>
                    <a href="https://github.com/marinov98/Statistical_Calculator">
                        <img
                            src={require('../../images/projects/stat-logo.jpeg')}
                            alt="stat calculator"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>C++, GNU Make/Cmake</p>
                    <h6>Description:</h6>
                    <p>
                        Simple Terminal-based calculator that can calculate 1 & 2 variable
                        statistics confidence intervals,conduct hypothesis testing, and find
                        correlation coefficients
                    </p>
                </div>
                <div className="instaPet-project col-sm project">
                    <h4 style={{ fontWeight: '600' }}>InstaPet</h4>
                    <a href="https://ttp-instapet.herokuapp.com/login">
                        <img
                            src={require('../../images/projects/instapet.png')}
                            alt="InstaPet"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>React, Redux, Node, Express, PostreSQL</p>
                    <h6>Description:</h6>
                    <p>Instagram... but for pets</p>
                </div>
                <div className="divineFoods-project col-sm project">
                    <h4 style={{ fontWeight: '600' }}>Divine Foods</h4>
                    <a href="https://marinov98.github.io/">
                        <img
                            src={require('../../images/projects/divineFoods-logo.png')}
                            alt="Divine Foods"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>HTML5, CSS3, jQuery</p>
                    <h6>Description:</h6>
                    <p>
                        Website for a pseudo premium food delivery service. Aims to deliver healthy
                        food fast. Contains its own plans and sign up forms and is optimized for
                        various screen sizes
                    </p>
                </div>
            </div>
        </div>
    );
}
