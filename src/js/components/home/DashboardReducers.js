import ActionTypes from './../../constants';

const initialState = {
    isFetchingList: false,
    dashboardList: {},
    acctTotal: 4800
};

export const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_LIST_REQUEST: {
            const actionState = {
                isFetchingList: true
            };
            return Object.assign({}, state, actionState);
        }
        case ActionTypes.GET_LIST_SUCCESS: {
            const actionState = {
                isFetchingList: false,
                dashboardList: action.result
            };
            return Object.assign({}, state, actionState);
        }
        case ActionTypes.GET_LIST_FAILURE: {
            const actionState = {
                isFetchingList: false,
            };
            return Object.assign({}, state, actionState);
        }

        default:
            return state;
    }
};
