import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Products from 'components/Products';
const ProductsPage = (props) => {
    return <Products { ...props } />
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
)(ProductsPage)
