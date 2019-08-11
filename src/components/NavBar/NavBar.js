import React from 'react';
import './NavBar.css';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';
import IosPaper from 'react-ionicons/lib/IosPaper';
import MdMail from 'react-ionicons/lib/MdMail';

export default function NavBar() {
    return (
        <div id="navbar">
            <nav className="sticky">
                <div className="row">
                    <h3 className="navName">𝔐𝔞𝔯𝔦𝔫𝔬𝔳</h3>
                    <ul className="main-nav ">
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                    <div className="col connectIcons">
                        <a href="https://github.com/marinov98/Resume/blob/master/resume.pdf">
                            <IosPaper fontSize="55px" />
                        </a>
                        <a href="https://github.com/marinov98">
                            <LogoGithub fontSize="55px" />
                        </a>
                        <a href="https://www.linkedin.com/in/marin-p-marinov/">
                            <LogoLinkedin fontSize="60px" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100009602178957">
                            <LogoFacebook fontSize="60px" />
                        </a>
                        <a href="mailto:marin.marinov@macaulay.cuny.edu?subject = Feedback&body = Message">
                            <MdMail fontSize="60px" beat="true" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
