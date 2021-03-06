import React from 'react';
import './Education.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Education() {
    return (
        <div id="education" className="container-fluid">
            <ScrollAnimation animateIn="fadeInDown" animateOnce="true" duration="2">
                <h3 className="education-title">Education</h3>
                <div className="row titles">
                    <div className="col-sm college">
                        <img src={require('../../images/education/hunter-logo.png')}></img>
                        <h5>Hunter College</h5>
                        <p>
                            {' '}
                            BA Computer Science 2017-2021
                            <br />
                            Minors: Mathematics, Psychology
                            <br /> Dean's List
                        </p>
                    </div>
                    <div className="col-sm awards macaulay">
                        <img src={require('../../images/education/macaulay-logo.png')}></img>
                        <h5>Macaulay Honors</h5>
                        <p>
                            William E. Macaulay Honors College Scholarship, full tuition merit
                            scholarship
                        </p>
                    </div>
                    <div className="col-sm awards daedalus">
                        <img src={require('../../images/education/daedalus.png')}></img>
                        <h5>Hunter College CS Honors</h5>
                        <p>Daedalus Honors Computer Science Scholar</p>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
