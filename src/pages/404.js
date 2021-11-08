import React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
    return (
        <div>
            <h1>404: Page Not Found</h1>
            <p>
                <Link to="/">Return to beginning</Link>
            </p>
        </div>
    );
}
