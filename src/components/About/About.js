import React from 'react';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function About() {
    return (
        <div id="about" className="about-me">
            <h3 class="subtitle fancy">
                <span style={{ marginTop: '20px' }}>About Me</span>
            </h3>
            <div className="row bio">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="2.5">
                    <div>
                        <img
                            src={require('../../images/self/ProfilePic2.png')}
                            alt="Marin Marinov"
                        />
                    </div>
                </ScrollAnimation>
                <div className="col desc">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="2.5">
                        <p className="description">
                            {' '}
                            Hello and Welcome to my website! My name is Marin and I am originally
                            from Sofia, Bulgaria. I am currently a student at macaulay honors
                            college @Hunter College. I am persuing a Computer Science major along
                            with minors in Mathematics and Psychology. I have worked mostly as a
                            math tutor but now I am hoping dive into being a software developer. I
                            have worked on both personal and group coding projects. I have also had
                            the honor to intern as a software engineer in WeWork labs
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
