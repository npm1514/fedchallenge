import React from 'react';
import IndexLink from 'react-router/lib/IndexLink';
import { Link } from 'react-router';

export function HeaderBar() {
    return (
        <header className="page-hd">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand">
                            Stock Portfolio
                        </IndexLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <form className="navbar-form navbar-right" role="search">
                            <div className="form-group input-group">
                                <input type="text" className="form-control" placeholder="Search.." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <span className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/help">
                                    <span className="fa fa-question-circle" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
