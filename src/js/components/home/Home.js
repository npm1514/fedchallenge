import React from 'react';
import { Display } from './Display';
import { Dashboard } from './Dashboard';

export function Home() {
    return (
        <div className="row">
            <div className="col-xs-12"><Display /></div>
            <div className="col-xs-12"><Dashboard /></div>
        </div>
    );
}
