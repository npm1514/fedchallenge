import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { StatusIcon } from './StatusIcon';
import * as AppActions from './../../actions/AppActions';

class AlertComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }

    dismiss = () => {
        const { dispatch } = this.props;
        const action = AppActions.closeAlert();
        dispatch(action);
    };
    render() {
        if (this.props.alertBox === false) {
            return null;
        }
        return (
            <div className="row alerts-container">
                <div className="col-xs-12">
                    <div className={`alert alert-${this.props.alertType}`}>
                        <button type="button" className="close" onClick={this.dismiss}>
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <div>
                            <StatusIcon status={this.props.alertType} />
                            {this.props.alertMessage}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AlertComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    alertMessage: PropTypes.string,
    alertType: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
    alertBox: PropTypes.bool
};

AlertComponent.defaultProps = {
    alertType: 'info',
    alertMessage: '',
    alertBox: false
};


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        alertMessage: state.site.alertMessage,
        alertType: state.site.alertType,
        alertBox: state.site.alertBox
    };
}

export const Alert = connect(
    mapStateToProps
)(AlertComponent);
