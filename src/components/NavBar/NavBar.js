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
            <nav className="sticky container-fluid">
                <div className="row">
                    <div className="col">
                        <h3 className="nav-name">Marin Pavlinov Marinov</h3>
                    </div>
                    <ul className="col main-nav ">
                        <li>
                            <Scrollchor to="#about-hidden" animate={{ offset: 20, duration: 800 }}>
                                About Me
                            </Scrollchor>
                        </li>
                        <li>
                            <Scrollchor to="#skills" animate={{ offset: 20, duration: 800 }}>
                                Skills
                            </Scrollchor>
                        </li>
                        <li>
                            <Scrollchor to="#projects" animate={{ offset: 20, duration: 800 }}>
                                Projects
                            </Scrollchor>
                        </li>
                    </ul>
                    <div className="col connectIcons">
                        <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                            <IosPaper className="icon" fontSize="42px" />
                        </a>
                        <a href="https://github.com/marinov98">
                            <LogoGithub className="icon" fontSize="42px" />
                        </a>
                        <a href="https://www.linkedin.com/in/marin-p-marinov/">
                            <LogoLinkedin className="icon" fontSize="47px" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009602178957">
                            <LogoFacebook className="icon" fontSize="47px" />
                        </a>
                        <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                            <MdMail className="icon" fontSize="47px" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
