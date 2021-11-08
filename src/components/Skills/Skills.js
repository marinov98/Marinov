import React from 'react';
import './Skills.css';
import './../About/About.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Skills() {
    return (
        <div id="skills" className="container-fluid gradient">
            <div className="row summary">
                <div className="col application-col">
                    <h3 className="tech-heading">Skills</h3>
                    <div className="row skill-row col-begin" data-sal="fade">
                        <h5>Markup/Style:</h5>
                    </div>
                    <div className="row" data-sal="flip-left">
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
                                            fontSize: '13px'
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
                                            fill: '#00BFFF'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#FF4500'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row skill-row" data-sal="fade">
                        <h5> Programming Languages:</h5>
                    </div>
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="C++"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#165f8c'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#FFD700'
                                        },
                                        text: {
                                            fill: 'black',
                                            fontSize: '13px'
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
                                            fill: '#1E90FF'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    text="C#"
                                    value={0}
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'purple'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#306998'
                                        },
                                        text: {
                                            fill: '#FFD43B',
                                            fontSize: '13px'
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
                                    text="Java"
                                    value={0}
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#f89820'
                                        },
                                        text: {
                                            fill: '#5382a1',
                                            fontSize: '13px'
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
                    <div className="row skill-row" data-sal="fade">
                        <h5>Technologies:</h5>
                    </div>
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="ReactJS"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'skyblue'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#764abc'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="AngularJS"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#b52e31'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Bootstrap"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#4B0082'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#4B0082'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="NodeJS"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#68A063'
                                        },
                                        text: {
                                            fill: '#303030',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Express"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'lightgrey'
                                        },
                                        text: {
                                            fill: 'black',
                                            fontSize: '13px'
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
                                            fill: 'lightgrey'
                                        },
                                        text: {
                                            fill: '#E4734A',
                                            fontSize: '13px'
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
                                            fill: '#FFFAFA'
                                        },
                                        text: {
                                            fill: '#0000FF',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Docker"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#0db7ed'
                                        },
                                        text: {
                                            fill: '#384d54',
                                            fontSize: '13px'
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
                                    text="Spring Boot"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#90EE90'
                                        },
                                        text: {
                                            fill: '#384d54',
                                            fontSize: '13px'
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
                                    text="Flask"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#000'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row skill-row" data-sal="fade">
                        <h5>Database Management Systems:</h5>
                    </div>
                    <div className="row" data-sal="flip-left">
                        <ul className="skills-list db">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="PostreSQL"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'lightgrey'
                                        },
                                        text: {
                                            fill: '#2B588E',
                                            fontSize: '13px'
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
                                    text="MongoDB"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#3FA037'
                                        },
                                        text: {
                                            fill: '#E8E7D5',
                                            fontSize: '13px'
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
                                    text="MySQL"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#00758F'
                                        },
                                        text: {
                                            fill: '#F29111',
                                            fontSize: '13px'
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
                </div>
                <div className="col software-col">
                    <h3 className="tech-heading">Software</h3>
                    <div className="row skill-row col-begin" data-sal="fade">
                        <h5>Tools:</h5>
                    </div>
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list other">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Git"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#F1502F'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#5BA581'
                                        },
                                        text: {
                                            fill: 'red',
                                            fontSize: '13px'
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
                                            fill: '#009792'
                                        },
                                        text: {
                                            fill: '#FFC50D',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="MonkeyLearn"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#008DDD'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#DC3E15'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#228B22'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Emacs"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#BA65ED'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="Bash"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'black'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="Trello"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#0079bf'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row skill-row" data-sal="fade">
                        <h5>Operating Systems:</h5>
                    </div>
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Ubuntu"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#DD4814'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="Arch Linux"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#0E88D3'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#00BCF2'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="MacOS"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: 'lightgrey'
                                        },
                                        text: {
                                            fill: 'black',
                                            fontSize: '13px'
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
                    <div className="row skill-row" data-sal="fade">
                        <h5>Cloud:</h5>
                    </div>
                    <div className="row" data-sal="flip-right">
                        <ul className="skills-list">
                            <li>
                                <CircularProgressbar
                                    value={0}
                                    text="Heroku"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#6762A6'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                            fill: '#4DC6BD'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                                    text="AWS"
                                    strokeWidth={50}
                                    background
                                    styles={{
                                        background: {
                                            fill: '#FF9900'
                                        },
                                        text: {
                                            fill: '#fff',
                                            fontSize: '13px'
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
                </div>
            </div>
        </div>
    );
}
