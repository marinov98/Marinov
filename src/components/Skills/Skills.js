import React from 'react';
import './Skills.css';
import './../About/About.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Skills() {
    return (
        <div id="skills" className="container-fluid gradient">
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row markup">
                    <h5>Markup Languages:</h5>
                </div>
                <div className="row skill-row">
                    <ul className="skills-list">
                        <li className="image-script">
                            <img
                                src={require('../../images/skills/html-logo.png')}
                                alt="html"
                            ></img>
                        </li>
                        <li>
                            <img src={require('../../images/skills/css-logo.png')} alt="CSS"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/md-logo.png')}
                                alt="MarkDown"
                            ></img>
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
                            <img src={require('../../images/skills/cpp-logo.png')} alt="c++"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/js-logo.png')}
                                alt="javascript"
                            ></img>
                        </li>

                        <li className="image-script">
                            <img
                                src={require('../../images/skills/typescript-logo.png')}
                                alt="typescript"
                            ></img>
                        </li>
                        <li className="image-script">
                            <img
                                src={require('../../images/skills/csharp-logo.png')}
                                alt="csharp"
                            ></img>
                        </li>
                        <li className="image-script">
                            <img
                                src={require('../../images/skills/python-logo.png')}
                                alt="python"
                            ></img>
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
                            <img
                                src={require('../../images/skills/React.js_logo-512.png')}
                                alt="React"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/redux-logo.png')}
                                alt="redux"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/angular-logo.png')}
                                alt="angular"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/bootstrap-logo.png')}
                                alt="bootstrap"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/gatsby-logo.png')}
                                alt="gatsby.js"
                            ></img>
                        </li>
                        <div className="row">
                            <ul className="skills-list">
                                <li>
                                    <img
                                        src={require('../../images/skills/nodejs-512.png')}
                                        alt="node"
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={require('../../images/skills/express-logo.png')}
                                        alt="express"
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={require('../../images/skills/jest-logo.png')}
                                        alt="jest"
                                    ></img>
                                </li>
                                <li>
                                    <img
                                        src={require('../../images/skills/Asp-net-logo.jpg')}
                                        alt="asp.NET"
                                    ></img>
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
                    <ul className="skills-list databases">
                        <li>
                            <img
                                src={require('../../images/skills/pq-logo.png')}
                                alt="postgresql"
                            ></img>
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
                <div className="row skill-row">
                    <h5>Other Software:</h5>
                </div>
                <div className="row">
                    <ul className="skills-list">
                        <li>
                            <img src={require('../../images/skills/git-logo.png')} alt="git"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/cmake-logo.jpg')}
                                alt="cmake"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/airtable-logo.png')}
                                alt="AirTable"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/monkeylearn-logo.png')}
                                alt="MonkeyLearn"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/office-logo.png')}
                                alt="office"
                            ></img>
                        </li>
                        <li>
                            <img src={require('../../images/skills/vim-logo.png')} alt="vim"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/emacs-logo.png')}
                                alt="emacs"
                            ></img>
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
                        <li className="image-script">
                            <img
                                src={require('../../images/skills/ubuntu-logo.png')}
                                alt="ubuntu"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/arch-logo.jpg')}
                                alt="arch-linux"
                            ></img>
                        </li>
                        <li>
                            <img src={require('../../images/skills/mac-logo.png')} alt="Mac"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/windows-logo.png')}
                                alt="Windows"
                            ></img>
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
                        <li className="image-script">
                            <img
                                src={require('../../images/skills/heroku-logo.png')}
                                alt="heroku"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/netlify-logo.jpg')}
                                alt="netlify"
                            ></img>
                        </li>
                    </ul>
                </div>
            </ScrollAnimation>
        </div>
    );
}
