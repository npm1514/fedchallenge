import React, { Component, PropTypes } from 'react';

import { HeaderBar } from './base/HeaderBar';
import { FooterBar } from './base/FooterBar';
import { Alert } from './util/Alert';

export class PageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="page-wrapper">
                <div id="content-wrapper">
                    <HeaderBar />
                    <Alert />
                    <div className="page-bd">
                        {this.props.children}
                    </div>
                    <FooterBar />
                </div>
            </div>
        );
    }
}

PageWrapper.propTypes = {
    children: PropTypes.element.isRequired
};
