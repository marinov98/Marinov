import React from 'react';
import daedalusLogo from '../../images/education/daedalus.png';
import hunterLogo from '../../images/education/hunter-logo.png';
import macaulayLogo from '../../images/education/macaulay-logo.png';
import './Education.css';

export default function Education() {
    return (
        <div id="education" className="container-fluid">
            <h3 className="education-title">Education</h3>
            <div className="row titles">
                <div className="col-sm awards college" data-sal="zoom-in">
                    <img src={hunterLogo}></img>
                    <h5>Hunter College</h5>
                    <p>
                        {' '}
                        BA Computer Science 2017-2021
                        <br />
                        Minors: Mathematics, Psychology
                        <br /> Dean's List
                    </p>
                </div>
                <div className="col-sm awards macaulay" data-sal="zoom-in">
                    <img src={macaulayLogo}></img>
                    <h5>Macaulay Honors</h5>
                    <p>
                        William E. Macaulay Honors College Scholarship, full tuition merit
                        scholarship
                    </p>
                </div>
                <div className="col-sm awards daedalus" data-sal="zoom-in">
                    <img src={daedalusLogo}></img>
                    <h5>Hunter College CS Honors</h5>
                    <p>Daedalus Honors Computer Science Scholar</p>
                </div>
            </div>
        </div>
    );
}
