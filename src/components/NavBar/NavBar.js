import React from 'react';
import './NavBar.css';
import Scrollchor from 'react-scrollchor';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosPaper from 'react-ionicons/lib/IosPaper';
import MdMail from 'react-ionicons/lib/MdMail';

export default function NavBar() {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark main-nav sticky">
                <div className="nav-name col">
                    <h3 className="navbar-brand">Marin Pavlinov Marinov</h3>
                </div>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto col">
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#about-hidden"
                                animate={{ offset: 20, duration: 800 }}
                            >
                                About
                            </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#go-to-skills"
                                animate={{ offset: 20, duration: 800 }}
                            >
                                Skills
                            </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#go-to-projects"
                                animate={{ offset: 20, duration: 800 }}
                            >
                                Projects
                            </Scrollchor>
                        </li>
                    </ul>
                </div>
                <div className="col connect-icons">
                    <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                        <IosPaper className="icon" color="white" fontSize="35px" />
                    </a>
                    <a href="https://github.com/marinov98">
                        <LogoGithub className="icon" color="white" fontSize="40px" />
                    </a>
                    <a href="https://www.linkedin.com/in/marin-p-marinov/">
                        <LogoLinkedin className="icon" color="white" fontSize="40px" />
                    </a>
                    <a href="https://fb.me/mmarinov505">
                        <LogoFacebook className="icon" color="white" fontSize="40px" />
                    </a>
                    <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                        <MdMail className="icon" color="white" fontSize="40px" />
                    </a>
                </div>
            </nav>
        </div>
    );
}
