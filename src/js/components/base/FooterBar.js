import React from 'react';

const myName = 'ADD_YOUR_NAME';
const todaysDate = 'ADD_DATE';

export function FooterBar() {
    return (
        <footer className="page-ft">
            <div className="container-fluid text-center">
                <ul>
                    <li>{myName} ({todaysDate})</li>
                </ul>
            </div>
        </footer>
    );
}
