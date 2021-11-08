import React from 'react';
import './About.css';
import headshot from "../../images/self/headShot.png";
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
                        <img src={headshot} alt="Marin Marinov" />
                    </div>
                </ScrollAnimation>
                <div className="col">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="3">
                        <p>
                            {' '}
                            Hello and Welcome to my website! My name is Marin. I graduated Magna Cum Laude with a Bachelors in Computer Science and Minors in Mathematics and Psychology. 
                            <br />
                            <br />
                            <span>
                                I have worked as a math tutor, tutoring high school
                                algebra and geometry to multi-variable calculus . Now, I am building my career
                                as a software developer, having interned at WeWork Labs and currently working full-time at Vanguard. I am 
                                very detail-oriented and committed to producing high-quality software to move the industry forward. 
                            </span>
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
