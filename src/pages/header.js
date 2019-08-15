import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marin Marinov || Aspiring Software Developer</title>
                {/* <link rel="canonical" href="https://mmarinov.netlify.com/" /> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
        </div>
    );
}
