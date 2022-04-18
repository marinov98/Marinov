import React from 'react';
import { Button } from 'reactstrap';
import BountyHouseProject from '../../images/projects/bounty-house.jpg';
import ClusterDuckProject from '../../images/projects/clusterduck.png';
import DivineFoodsProject from '../../images/projects/divineFoods-logo.png';
import DotFiles from '../../images/projects/dotfiles.png';
import InfoHawkProject from '../../images/projects/info-hawk.jpg';
import InstaPetProject from '../../images/projects/instapet.png';
import StatCalcProject from '../../images/projects/stat-logo.jpeg';
import WeatherGuardianProject from '../../images/projects/weatherGuardian.svg';
import './Projects.css';

export default function Projects() {
    return (
        <div id="projects">
            <div className="row all-projects">
                <div className="col clusterDuck project" data-sal="zoom-out">
                    <h4>ClusterDuck</h4>
                    <a href="https://github.com/marinov98/Cluster-Duck" target="_blank">
                        <img src={ClusterDuckProject} alt="Cluster Duck"></img>
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
                        other colleges in the future) by allowing students to post questions/advice
                        about computer science and tag their post with a specific class if they so
                        wish. Students can reply to one another, like each others post and view each
                        other's profiles
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
                <div className="col infoHawk project" data-sal="zoom-out">
                    <h4>Info-Hawk</h4>
                    <a href="https://github.com/marinov98/Info-Hawk" target="_blank">
                        <img src={InfoHawkProject} alt="Info-Hawk"></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>MongoDB, EJS, Node.js, Express.js, Redis, Json Web tokens, Cookies</p>
                    <h6>Description:</h6>
                    <p>
                        A Questionaire creator full-stack app aimed at reducing the time needed to
                        get information from one person to another. Users can create forms for
                        others to complete by either sending them an email or a copied link.{' '}
                    </p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '3px'
                        }}
                    >
                        <a href="https://info-hawk.herokuapp.com/" target="_blank">
                            <Button color="secondary">Demo</Button>
                        </a>
                    </div>
                </div>
                <div className="row all-projects">
                    <div className="bountHouse-project col project" data-sal="zoom-out">
                        <h4>Bounty House</h4>
                        <a href="https://github.com/marinov98/bounty-house" target="_blank">
                            <img src={BountyHouseProject} alt="Bounty-House"></img>
                        </a>
                        <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                        <p>
                            React.js, Node.js, NestJS, GraphQL, PostgreSQL, Json Web Tokens, Cookies
                        </p>
                        <h6>Description:</h6>
                        <p>
                            (In development!) App where users can join organizations and fulfill
                            contracts others users put up to get points and be recognized
                        </p>
                        <div
                            style={{
                                textAlign: 'center',
                                marginBottom: '3px'
                            }}
                        ></div>
                    </div>
                    <div className="instaPet-project col project" data-sal="zoom-out">
                        <h4>InstaPet</h4>
                        <a href="https://github.com/angelalim1010/InstaPet" target="_blank">
                            <img src={InstaPetProject} alt="InstaPet"></img>
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
            </div>
            <div className="row all-projects">
                <div className="calculator-project col project" data-sal="zoom-out">
                    <h4>Statistical Calculator</h4>
                    <a href="https://github.com/marinov98/Statistical_Calculator" target="_blank">
                        <img src={StatCalcProject} alt="stat calculator"></img>
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
                <div className="col dotfiles project" data-sal="zoom-out">
                    <h4>Dotfiles</h4>
                    <a href="https://github.com/marinov98/dotfiles" target="_blank">
                        <img src={DotFiles} alt="Dot files"></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>Shell script, Vim script, Python, Emacs-lisp</p>
                    <h6>Description:</h6>
                    <p>
                        A combination of '.' configuaration files and shell scripts. Contains my
                        configurations for{' '}
                        <b>Vim, Emacs, Ranger, i3wn, Bash, Powerline-Shell, Compton and Tmux</b>.
                        The shell scripts transfer the configuration files to the User's home
                        directory and also install essential packages for programming and
                        development. Contains package install scripts compatible with Debian and
                        Arch-based Linux Distributions, Windows and MacOS.
                    </p>
                </div>
            </div>
            <div className="row all-projects">
                <div className="divineFoods-project col project" data-sal="zoom-out">
                    <h4>Divine Foods</h4>
                    <a href="https://github.com/marinov98/divine-and-healthy-foods" target="_blank">
                        <img src={DivineFoodsProject} alt="Divine Foods"></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>HTML5, CSS3, jQuery, Express</p>
                    <h6>Description:</h6>
                    <p>
                        Responsive food ordering and delivery website for premium healthy food. Aims
                        to deliver healthy food fast. Contains its own plans and sign up forms.
                    </p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '3px'
                        }}
                    >
                        <a href="https://divine-and-healthy-foods.herokuapp.com/" target="_blank">
                            <Button color="secondary">Demo</Button>
                        </a>
                    </div>
                </div>
                <div className="col weather-guardian project" data-sal="zoom-out">
                    <h4>Weather Guardian</h4>
                    <a href="https://github.com/marinov98/big-red-hacks2019" target="_blank">
                        <img src={WeatherGuardianProject} alt="Weather Guardian"></img>
                    </a>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack:</h5>
                    <p>Yarn, React.js, Node.js, Express.js, IBM weather API</p>
                    <h6>Description:</h6>
                    <p>
                        App created to warn users if there has been a fire nearby and the wind is
                        blowing towards their direction. This knowledge is crucial if the user or
                        their family has asthma or live in an area that is susceptible to fire.{' '}
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
        </div>
    );
}
