import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class DisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="display">
                <div className="totals">Cash Total: <strong>{this.props.acctTotal}</strong></div>
            </div>
        );
    }
}

DisplayComponent.propTypes = {
    acctTotal: PropTypes.number
};
DisplayComponent.defaultProps = {
    acctTotal: 0
};

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        dashboardList: state.dashboard.dashboardList,
        acctTotal: state.dashboard.acctTotal
    };
}

export const Display = connect(
    mapStateToProps
)(DisplayComponent);
