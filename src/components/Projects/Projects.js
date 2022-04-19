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
                    <p>
                        {' '}
                        A social media app aimed at creating community in Hunter College ( maybe
                        other colleges in the future) by allowing students to post questions/advice
                        about computer science and tag their post with a specific class if they so
                        wish. Students can reply to one another, like each others post and view each
                        other's profiles
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>MongoDB, React.js, Node.js, Express.js, Docker, JWT, Google Login API</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://cluster-duck.herokuapp.com/login" target="_blank">
                            <Button color="success">Demo</Button>
                        </a>
                    </div>
                </div>
                <div className="col infoHawk project" data-sal="zoom-out">
                    <h4>Info-Hawk</h4>
                    <a href="https://github.com/marinov98/Info-Hawk" target="_blank">
                        <img src={InfoHawkProject} alt="Info-Hawk"></img>
                    </a>
                    <p>
                        A Questionaire creator full-stack app aimed at reducing the time needed to
                        get information from one person to another. Users can create forms for
                        others to complete by either sending them an email or a copied link.{' '}
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>MongoDB, EJS, Typescript, Node.js, Express.js, Redis, JWT, Auth Cookies</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://info-hawk.herokuapp.com/" target="_blank">
                            <Button color="success">Demo</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row all-projects">
                <div className="bountyHouse col project" data-sal="zoom-out">
                    <h4>Bounty House</h4>
                    <a href="https://github.com/marinov98/bounty-house" target="_blank">
                        <img src={BountyHouseProject} alt="Bounty-House"></img>
                    </a>
                    <p>
                        (In development!) App where users can join organizations and fulfill
                        contracts others users put up to get points and be recognized
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>React.js, Node.js, NestJS, GraphQL, PostgreSQL, JWT, Cookies</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <Button color="info">In Progress</Button>
                    </div>
                </div>
                <div className="instaPet col project" data-sal="zoom-out">
                    <h4>InstaPet</h4>
                    <a href="https://github.com/angelalim1010/InstaPet" target="_blank">
                        <img src={InstaPetProject} alt="InstaPet"></img>
                    </a>
                    <p>
                        Group project aimed to build an app like Instagram... but for pets. Share
                        your pictures and like other people's posts.
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>React.js, Redux.js, Node.js, Express.js, PostreSQL, JWT</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://ttp-instapet.herokuapp.com/" target="_blank">
                            <Button color="success">Demo</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row all-projects">
                <div className="calculator-project col project" data-sal="zoom-out">
                    <h4>Statistical Calculator</h4>
                    <a href="https://github.com/marinov98/Statistical_Calculator" target="_blank">
                        <img src={StatCalcProject} alt="stat calculator"></img>
                    </a>
                    <p>
                        Simple Terminal-based calculator that can calculate 1 & 2 variable
                        statistics confidence intervals,conduct hypothesis testing, and find
                        correlation coefficients.
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>C++, GNU Make/Cmake</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a
                            href="https://github.com/marinov98/Statistical_Calculator"
                            target="_blank"
                        >
                            <Button color="primary">Download</Button>
                        </a>
                    </div>
                </div>
                <div className="col dotfiles project" data-sal="zoom-out">
                    <h4>Dotfiles</h4>
                    <a href="https://github.com/marinov98/dotfiles" target="_blank">
                        <img src={DotFiles} alt="Dot files"></img>
                    </a>
                    <p>
                        A combination of '.' configuaration files and shell scripts. Contains my
                        configurations for{' '}
                        <b>Vim, Emacs, Ranger, i3wn, Bash, Powerline-Shell, Compton and Tmux</b>.
                        The shell scripts transfer the configuration files to the User's home
                        directory and also install essential packages for programming and
                        development. Contains package install scripts compatible with Debian and
                        Arch-based Linux Distributions, Windows and MacOS.
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>Shell script, Vim script, Python, Emacs-lisp</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://github.com/marinov98/dotfiles" target="_blank">
                            <Button color="primary">Download</Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row all-projects">
                <div className="divineFoods-project col project" data-sal="zoom-out">
                    <h4>Divine Foods</h4>
                    <a href="https://github.com/marinov98/divine-and-healthy-foods" target="_blank">
                        <img src={DivineFoodsProject} alt="Divine Foods"></img>
                    </a>
                    <p>
                        Responsive food ordering and delivery website for premium healthy food. Aims
                        to deliver healthy food fast. Contains its own plans and sign up forms.
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>HTML5, CSS3, jQuery, Express</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://divine-and-healthy-foods.herokuapp.com/" target="_blank">
                            <Button color="success">Demo</Button>
                        </a>
                    </div>
                </div>
                <div className="col weather-guardian project" data-sal="zoom-out">
                    <h4>Weather Guardian</h4>
                    <a href="https://github.com/marinov98/big-red-hacks2019" target="_blank">
                        <img src={WeatherGuardianProject} alt="Weather Guardian"></img>
                    </a>
                    <p>
                        App created to warn users if there has been a fire nearby and the wind is
                        blowing towards their direction. This knowledge is crucial if the user or
                        their family has asthma or live in an area that is susceptible to fire.{' '}
                    </p>
                    <h5 style={{ marginTop: '7px' }}>Tech Stack</h5>
                    <p>Yarn, React.js, Node.js, Express.js, IBM weather API</p>
                    <div
                        style={{
                            textAlign: 'center',
                            marginBottom: '7px'
                        }}
                    >
                        <a href="https://weather-guardian.herokuapp.com/" target="_blank">
                            <Button color="success">Demo</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
