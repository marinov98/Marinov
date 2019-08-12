import React from 'react';
import './About.css';

export default function About() {
    return (
        <div id="about" className="aboutMe row-fluid">
            <h3 class="subtitle fancy">
                <span style={{ marginTop: '20px' }}>About Me</span>
            </h3>
            <div className="row bio">
                <img
                    className="profileimg"
                    src={require('../../images/self/ProfilePic2.png')}
                    alt="Marin Marinov"
                />
                <div className="col desc">
                    <p className="description">
                        {' '}
                        Hello and Welcome to my website! My name is Marin. I am currently a student
                        at macaulay honors college @Hunter College. I am persuing a Computer Science
                        major along with minors in Mathematics and Psychology. I have worked mostly
                        as a math tutor but now I am hoping dive into being a software developer. I
                        have worked on both personal and group coding projects. I have also had the
                        honor to intern as a software engineer in WeWork labs
                    </p>
                </div>
            </div>
        </div>
    );
}
