import React from 'react';
import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Projects() {
    return (
        <div id="projects">
            <ScrollAnimation animateIn="bounceInDown" animateOnce="true">
                <div className="row all-projects">
                    <div className="calculator-project col project">
                        <h4>Statistical Calculator</h4>
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
                    <div className="instaPet-project col project">
                        <h4>InstaPet</h4>
                        <a href="https://github.com/angelalim1010/InstaPet">
                            <img
                                src={require('../../images/projects/instapet.png')}
                                alt="InstaPet"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>API, React, Redux, Node, Express, PostreSQL</p>
                        <h6>Description:</h6>
                        <p>Group project aimed to build an app like Instagram... but for pets</p>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInDown" animateOnce="true">
                <div className="row all-projects">
                    <div className="divineFoods-project col project">
                        <h4>Divine Foods</h4>
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
                            Website for a pseudo premium food delivery service. Aims to deliver
                            healthy food fast. Contains its own plans and sign up forms and is
                            optimized for various screen sizes
                        </p>
                    </div>
                    <div className="col dotfiles project">
                        <h4>Dotfiles</h4>
                        <a href="https://github.com/marinov98/dotfiles">
                            <img
                                src={require('../../images/projects/dotfiles.png')}
                                alt="Dot files"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>Shell script, Vim script, Python, Emacs-lisp</p>
                        <h6>Description:</h6>
                        <p>
                            A combination of '.' configuaration files and shell scripts. Contains my
                            configurations for{' '}
                            <b>Vim, Emacs, Ranger, i3wn, Bash, Powerline-Shell, Compton and Tmux</b>
                            . The shell scripts transfer the configuration files to the User's home
                            directory and also install essential packages for programming and
                            development. Contains package install scripts compatible with Debian and
                            Arch-based Linux Distributions, Windows and MacOS
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
