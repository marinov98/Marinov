import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    };

    render() {
        return (
            <div className="row-fluid gradient" id="projects">
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
                        <a href="https://github.com/angelalim1010/InstaPet">
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
                        <a href="https://github.com/marinov98/marinov98.github.io">
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
}

Projects.propTypes = {
    toggle: PropTypes.bool
};
