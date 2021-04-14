import React, { PropTypes } from 'react';

const ICON_CLASSES = {
    warning: ['alert-icon text-warning', 'fa fa-flash'],
    danger: ['alert-icon text-danger', 'fa fa-warning'],
    success: ['alert-icon text-success', 'fa fa-check'],
    info: ['alert-icon text-info', 'fa fa-info']
};

export function StatusIcon(props) {
    return (
        <span className={ICON_CLASSES[props.status][0]}>
            <i className={ICON_CLASSES[props.status][1]} />
        </span>
    );
}

StatusIcon.propTypes = {
    status: PropTypes.oneOf(['warning', 'danger', 'success', 'info']).isRequired
};
