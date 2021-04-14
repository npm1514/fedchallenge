import ActionTypes from '../constants';

export function createAlert(alertMessage, alertType, alertStatus) {
    return ({
        type: ActionTypes.CREATE_ALERT,
        alertMessage,
        alertType,
        alertStatus
    });
}
export function closeAlert() {
    return ({
        type: ActionTypes.CLOSE_ALERT
    });
}
