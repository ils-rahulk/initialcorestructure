import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Clients from 'components/Clients';
const ClientsPage = (props) => {
    return <Clients { ...props } />
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
)(ClientsPage)
