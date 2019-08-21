import React from 'react';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function About() {
    return (
        <div id="about" className="about-me container-fluid">
            <h3 class="subtitle fancy">
                <span style={{ marginTop: '20px' }}>About Me</span>
            </h3>
            <div className="row bio">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="3">
                    <div className="col">
                        <img
                            src={require('../../images/self/ProfilePic2.png')}
                            alt="Marin Marinov"
                        />
                    </div>
                </ScrollAnimation>
                <div className="col">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="3">
                        <p>
                            {' '}
                            Hello and Welcome to my website! My name is Marin and I am originally
                            from Sofia, Bulgaria. I am currently a student at Macaulay Honors
                            College @Hunter College. I am pursuing a Computer Science major along
                            with minors in Mathematics and Psychology.
                            <br />
                            <br />
                            <span>
                                I have worked as a math tutor for 5 years, tutoring high school
                                algebra and geometry to multi-variable calculus . Now I am hoping to
                                dive into being a software developer. I have worked on both personal
                                and group coding projects. I have also had the honor to intern as a
                                software engineer in WeWork Labs.
                            </span>
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
