import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as DashboardActions from './DashboardActions';

export class DashboardComponent extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        const action = DashboardActions.getList();
        dispatch(action);
    }
    createListTable = () => {
        const arr = [];
        const dashboardList = this.props.dashboardList;

        Object.keys(dashboardList).forEach((item) => {
            if ({}.hasOwnProperty.call(dashboardList, item)) {
                const shareBoughtPrice = dashboardList[item].shares * dashboardList[item].bought;
                const shareCurrent = dashboardList[item].current - dashboardList[item].bought;
                const shareValue = dashboardList[item].shares * dashboardList[item].current;
                const investReturn = shareValue - shareBoughtPrice;

                if (dashboardList[item].symbol.toLowerCase().indexOf(this.props.searchTerm) !== -1 ||
                    dashboardList[item].company.toLowerCase().indexOf(this.props.searchTerm) !== -1
                ) {
                    arr.push(
                        <tr>
                            <td>{dashboardList[item].symbol}</td>
                            <td>{dashboardList[item].company}</td>
                            <td>{dashboardList[item].shares}</td>
                            <td>{dashboardList[item].bought}</td>
                            <td>{shareBoughtPrice}</td>
                            <td>{`${dashboardList[item].current} (${shareCurrent})`}</td>
                            <td className={(investReturn > 0) ? 'ico-green' : 'ico-red'}>{investReturn} {(investReturn > 0) ? <i className="fa fa-arrow-up ico-green" /> : <i className="fa fa-arrow-down ico-red" /> }</td>
                            <td>{shareValue}</td>
                            <td><button>Sell</button></td>
                        </tr>
                    );
                }
            }
        });
        if (arr.length <= 0) {
            arr.push(
                <tr><td colSpan="9" className="no-results-msg">No Results</td></tr>
            );
        }
        return arr;
    }
    render() {
        return (
            <div className="dashboard panel panel-primary">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <td>Symbol</td>
                            <td>Company</td>
                            <td>Shares</td>
                            <td>Bought</td>
                            <td>Price</td>
                            <td>Current</td>
                            <td>Profit/Loss</td>
                            <td>Value</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createListTable()}
                    </tbody>
                </table>

            </div>
        );
    }
}
/* eslint-disable */
DashboardComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    dashboardList: PropTypes.any,
    isFetchingList: PropTypes.bool,
    searchTerm: PropTypes.string

};
DashboardComponent.defaultProps ={
    isFetchingList: false,
    searchTerm: ''

}
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        dashboardList: state.dashboard.dashboardList,
        searchTerm: state.site.searchTerm
    };
}

export const Dashboard = connect(
    mapStateToProps
)(DashboardComponent);
