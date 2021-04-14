import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as AppActions from './../actions/AppActions';

class NotFoundPageComponent extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const { splat } = this.props.routeParams;
        const action = AppActions.createAlert(`${splat} can not be found.`, 'danger');
        dispatch(action);
    }
    render() {
        return (
            <div className="page-bd not-found">
                <h3>404 Error - Page not found!</h3>
                <Link to="/">Go to the dashboard <i className="fa fa-arrow-circle-right" /></Link>
            </div>
        );
    }
}
NotFoundPageComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    routeParams: PropTypes.shape({
        splat: PropTypes.string.isRequired
    }).isRequired
};

// Map Redux state to component props
function mapStateToProps() {
    return {};
}

export const NotFoundPage = connect(
    mapStateToProps
)(NotFoundPageComponent);
