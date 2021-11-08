import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marin Marinov || Software Developer</title>
                <link rel="canonical" href="https://mmarinov.netlify.com/" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
            </Helmet>
        </div>
    );
}
