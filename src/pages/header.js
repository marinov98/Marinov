import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marin Marinov || Software Developer</title>
                <link rel="canonical" href="https://mmarinov.netlify.com/" />
            </Helmet>
        </div>
    );
}
