import React, { Component } from 'react';
import './Skills.css';
import './../About/About.css';

export default class Skills extends Component {
    render() {
        return (
            <div id="skills" className="row-fluid">
                <h3 className="title">Skills</h3>
                <div className="row skillRow">
                    <h5> Programming Languages:</h5>
                </div>
                <div className="row skillRow">
                    <h5>FrameWorks/Libraries/Runtime Environments:</h5>
                </div>
                <div className="row skillRow">
                    <h5>Database(s):</h5>
                </div>
                <div className="row skillRow">
                    <h5>Other Software:</h5>
                </div>
            </div>
        );
    }
}
