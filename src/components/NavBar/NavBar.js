import React from 'react';
import { LogoGithub, LogoLinkedin, MailOutline, NewspaperOutline } from 'react-ionicons';
import { Scrollchor } from 'react-scrollchor';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark main-nav sticky">
                <div className="nav-name col">
                    <h3 className="navbar-brand">Marin Marinov</h3>
                </div>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto col">
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#about-hidden"
                                animate={{ offset: 5, duration: 600 }}
                            >
                                About
                            </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#go-to-skills"
                                animate={{ offset: 5, duration: 600 }}
                            >
                                Skills
                            </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor
                                className="nav-link"
                                to="#go-to-projects"
                                animate={{ offset: 5, duration: 600 }}
                            >
                                Projects
                            </Scrollchor>
                        </li>
                    </ul>
                </div>
                <div className="col connect-icons">
                    <a
                        href="https://github.com/marinov98/Resume/blob/master/resume.pdf"
                        target="_blank"
                    >
                        <NewspaperOutline
                            className="icon"
                            color="white"
                            height="2.25rem"
                            width="2.25rem"
                        />
                    </a>
                    <a href="https://github.com/marinov98" target="_blank">
                        <LogoGithub
                            className="icon"
                            color="white"
                            height="2.25rem"
                            width="2.25rem"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/marin-p-marinov/" target="_blank">
                        <LogoLinkedin
                            className="icon"
                            color="white"
                            height="2.25rem"
                            width="2.25rem"
                        />
                    </a>
                    <a
                        href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message"
                        target="_blank"
                    >
                        <MailOutline
                            className="icon"
                            color="white"
                            height="2.25rem"
                            width="2.25rem"
                        />
                    </a>
                </div>
            </nav>
        </div>
    );
}
