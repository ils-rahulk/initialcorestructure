import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Scheduler from 'components/Scheduler';
const SchedulerPage = (props) => {
    return <Scheduler { ...props } />
};

// const mapStateToProps = state => ({
// })

// const mapDispatchToProps = dispatch => ({
// })

const withConnect = connect(
    undefined,
    undefined,
);

export default compose(
    withConnect
)(SchedulerPage)
