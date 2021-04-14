export function getList() {
    return (dispatch) => {
        dispatch({ type: 'GET_LIST_REQUEST' });
        return fetch('/api/dashboard/list').then(
            response => response.json()).then(
                (result) => {
                    dispatch({ type: 'GET_LIST_SUCCESS', result });
                }).catch(
            (error) => {
                dispatch({ type: 'GET_LIST_FAILURE', error });
            }
        );
    };
}
