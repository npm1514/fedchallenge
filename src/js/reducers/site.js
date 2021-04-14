import ActionTypes from '../constants';

const initialState = {
    alertType: 'info',
    alertMessage: '',
    alertBox: false
};

export const site = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_ALERT: {
            const actionState = {
                alertMessage: action.alertMessage,
                alertType: action.alertType,
                alertBox: true
            };
            return Object.assign({}, state, actionState);
        }
        case ActionTypes.CLOSE_ALERT: {
            const actionState = {
                alertBox: false
            };
            return Object.assign({}, state, actionState);
        }
        default:
            return state;
    }
};
