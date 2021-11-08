import React from 'react';
import './Projects.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'reactstrap';
import ClusterDuckProject from '../../images/projects/clusterduck.png';
import InstaPetProject from '../../images/projects/instapet.png';
import StatCalcProject from '../../images/projects/stat-logo.jpeg';
import DotFiles from '../../images/projects/dotfiles.png';
import DivineFoodsProject from '../../images/projects/divineFoods-logo.png';
import WeatherGuardianProject from '../../images/projects/weatherGuardian.svg';

export default function Projects() {
    return (
        <div id="projects">
            <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                <div className="row all-projects">
                    <div className="col clusterDuck project">
                        <h4>ClusterDuck</h4>
                        <a href="https://github.com/marinov98/Cluster-Duck" target="_blank">
                            <img
                                src={ClusterDuckProject}
                                alt="Cluster Duck"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>
                            MongoDB, React.js, Node.js, Express.js, Docker, Json Web tokens, Google
                            Login API
                        </p>
                        <h6>Description:</h6>
                        <p>
                            {' '}
                            A social media app aimed at creating community in Hunter College ( maybe
                            other colleges in the future) by allowing students to post
                            questions/advice about computer science and tag their post with a
                            specific class if they so wish. Students can reply to one another, like
                            each others post and view each other's profiles
                        </p>
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '3px'
                            }}
                        >
                            <a href="https://cluster-duck.herokuapp.com/login" target="_blank">
                                <Button color="secondary">Demo</Button>
                            </a>
                        </div>
                    </div>
                    <div className="instaPet-project col project">
                        <h4>InstaPet</h4>
                        <a href="https://github.com/angelalim1010/InstaPet" target="_blank">
                            <img
                                src={InstaPetProject}
                                alt="InstaPet"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>React.js, Redux.js, Node.js, Express.js, PostreSQL, Json Web Tokens</p>
                        <h6>Description:</h6>
                        <p>Group project aimed to build an app like Instagram... but for pets.</p>
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '3px'
                            }}
                        >
                            <a href="https://ttp-instapet.herokuapp.com/" target="_blank">
                                <Button color="secondary">Demo</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                <div className="row all-projects">
                    <div className="calculator-project col project">
                        <h4>Statistical Calculator</h4>
                        <a
                            href="https://github.com/marinov98/Statistical_Calculator"
                            target="_blank"
                        >
                            <img
                                src={StatCalcProject}
                                alt="stat calculator"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>C++, GNU Make/Cmake</p>
                        <h6>Description:</h6>
                        <p>
                            Simple Terminal-based calculator that can calculate 1 & 2 variable
                            statistics confidence intervals,conduct hypothesis testing, and find
                            correlation coefficients.
                        </p>
                    </div>
                    <div className="col dotfiles project">
                        <h4>Dotfiles</h4>
                        <a href="https://github.com/marinov98/dotfiles" target="_blank">
                            <img
                                src={DotFiles}
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
                            Arch-based Linux Distributions, Windows and MacOS.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
                <div className="row all-projects">
                    <div className="divineFoods-project col project">
                        <h4>Divine Foods</h4>
                        <a
                            href="https://github.com/marinov98/divine-and-healthy-foods"
                            target="_blank"
                        >
                            <img
                                src={DivineFoodsProject}
                                alt="Divine Foods"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>HTML5, CSS3, jQuery, Express</p>
                        <h6>Description:</h6>
                        <p>
                            Responsive food ordering and delivery website for premium healthy food.
                            Aims to deliver healthy food fast. Contains its own plans and sign up
                            forms.
                        </p>
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '3px'
                            }}
                        >
                            <a
                                href="https://divine-and-healthy-foods.herokuapp.com/"
                                target="_blank"
                            >
                                <Button color="secondary">Demo</Button>
                            </a>
                        </div>
                    </div>
                    <div className="col weather-guardian project">
                        <h4>Weather Guardian</h4>
                        <a href="https://github.com/marinov98/big-red-hacks2019" target="_blank">
                            <img
                                src={WeatherGuardianProject}
                                alt="Weather Guardian"
                            ></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>Yarn, React.js, Node.js, Express.js, IBM weather API</p>
                        <h6>Description:</h6>
                        <p>
                            App created to warn users if there has been a fire nearby and the wind
                            is blowing towards their direction. This knowledge is crucial if the
                            user or their family has asthma or live in an area that is susceptible
                            to fire.{' '}
                        </p>
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '3px'
                            }}
                        >
                            <a href="https://weather-guardian.herokuapp.com/" target="_blank">
                                <Button color="secondary">Demo</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
