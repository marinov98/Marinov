import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div className="row-fluid" id="projects">
            <div className="row allProjects">
                <div className="calculator-project col-sm">
                    <h4>Statistical Calculator</h4>
                    <a href="https://github.com/marinov98/Statistical_Calculator">
                        <img
                            src={require('../../images/projects/stat-logo.jpeg')}
                            alt="stat calculator"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>C++, GNU Make/Cmake</p>
                </div>
                <div className="instaPet-project col-sm">
                    <h4>InstaPet</h4>
                    <a href="https://ttp-instapet.herokuapp.com/login">
                        <img
                            src={require('../../images/projects/instapet-logo.png')}
                            alt="InstaPet"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>React, Redux, Node, Express, PostreSQL</p>
                </div>
                <div className="divineFoods-project col-sm">
                    <h4>Divine Foods</h4>
                    <a href="https://marinov98.github.io/">
                        <img
                            src={require('../../images/projects/divineFoods-logo.png')}
                            alt="Divine Foods"
                        ></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>HTML5, CSS3, jQuery</p>
                </div>
            </div>
        </div>
    );
}
