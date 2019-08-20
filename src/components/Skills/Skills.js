import React from 'react';
import './Skills.css';
import './../About/About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
    return (
        <div id="skills" className="container-fluid gradient">
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row markup">
                    <h5>Markup Languages:</h5>
                </div>
                <div className="row skill-row">
                    <ul className="skills-list">
                        <li>
                            <CircularProgressbar
                                value={0}
                                strokeWidth={50}
                                text="HTML5"
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                strokeWidth={50}
                                text="CSS3"
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Markdown"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5> Programming Languages:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="C++"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                text="JavaScript"
                                value={0}
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>

                        <li>
                            <CircularProgressbar
                                text="TypeScript"
                                value={0}
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                text="C#"
                                value={0}
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                text="Python"
                                value={0}
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Frameworks/Libraries/Runtime Environments:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="React"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Redux"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Angluar"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Bootstrap"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="GatsbyJS"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <div className="row">
                            <ul className="skills-list">
                                <li>
                                    <CircularProgressbar
                                        value={0}
                                        text="NodeJS"
                                        strokeWidth={50}
                                        background
                                        styles={{
                                            background: {
                                                fill: 'darkorange'
                                            },
                                            text: {
                                                fill: '#fff',
                                                fontSize: '12px'
                                            },
                                            path: {
                                                stroke: '#fff'
                                            },
                                            trail: { stroke: 'transparent' }
                                        }}
                                    />
                                </li>
                                <li>
                                    <CircularProgressbar
                                        value={0}
                                        text="Express"
                                        strokeWidth={50}
                                        background
                                        styles={{
                                            background: {
                                                fill: 'darkorange'
                                            },
                                            text: {
                                                fill: '#fff',
                                                fontSize: '12px'
                                            },
                                            path: {
                                                stroke: '#fff'
                                            },
                                            trail: { stroke: 'transparent' }
                                        }}
                                    />
                                </li>
                                <li>
                                    <CircularProgressbar
                                        value={0}
                                        text="Jest"
                                        strokeWidth={50}
                                        background
                                        styles={{
                                            background: {
                                                fill: 'darkorange'
                                            },
                                            text: {
                                                fill: '#fff',
                                                fontSize: '12px'
                                            },
                                            path: {
                                                stroke: '#fff'
                                            },
                                            trail: { stroke: 'transparent' }
                                        }}
                                    />
                                </li>
                                <li>
                                    <CircularProgressbar
                                        value={0}
                                        text="ASP.NET"
                                        strokeWidth={50}
                                        background
                                        styles={{
                                            background: {
                                                fill: 'darkorange'
                                            },
                                            text: {
                                                fill: '#fff',
                                                fontSize: '12px'
                                            },
                                            path: {
                                                stroke: '#fff'
                                            },
                                            trail: { stroke: 'transparent' }
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Database(s):</h5>
                </div>
                <div className="row">
                    <ul className="skills-list db">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="PostreSQL"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Other Software:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list other">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Git"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="CMake"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="AirTable"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="MonkeyLearn"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Microsoft Office"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Vim"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Emacs"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Operating Systems:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Ubuntu"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Arch"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Windows 10"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="MacOS"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Cloud:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list">
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Heroku"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                        <li>
                            <CircularProgressbar
                                value={0}
                                text="Netlify"
                                strokeWidth={50}
                                background
                                styles={{
                                    background: {
                                        fill: 'darkorange'
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '12px'
                                    },
                                    path: {
                                        stroke: '#fff'
                                    },
                                    trail: { stroke: 'transparent' }
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
        </div>
    );
}
