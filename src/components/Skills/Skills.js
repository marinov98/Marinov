import React, { Component } from 'react';
import './Skills.css';
import './../About/About.css';

export default class Skills extends Component {
    render() {
        return (
            <div id="skills" className="row-fluid gradient">
                <div className="row skillRow">
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
                <div className="row skillRow">
                    <h5>Markup Languages:</h5>
                </div>
                <div className="row">
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
                <div className="row skillRow">
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
                                src={require('../../images/skills/redux-logo.jpg')}
                                alt="redux"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/nodejs-512.png')}
                                alt="node"
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
                                src={require('../../images/skills/Asp-net-logo.jpg')}
                                alt="asp.NET"
                            ></img>
                        </li>
                    </ul>
                </div>
                <div className="row skillRow">
                    <h5>Database(s):</h5>
                </div>
                <div className="row databases">
                    <img src={require('../../images/skills/pq-logo.png')} alt="postgresql"></img>
                </div>
                <div className="row skillRow">
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
                            <img src={require('../../images/skills/vim-logo.png')} alt="vim"></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/emacs-logo.png')}
                                alt="emacs"
                            ></img>
                        </li>
                        <li>
                            <img
                                src={require('../../images/skills/office-logo.png')}
                                alt="office"
                            ></img>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
