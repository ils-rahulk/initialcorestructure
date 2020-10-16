import React from 'react'
import {
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import {
    TheHeaderDropdown,
}  from './index'

const TheHeader = () => {

    return (
        <CHeader colorScheme="dark">
            <CHeaderBrand className="mx-auto d-lg-none" to="/">
                <CIcon name="logo" height="48" alt="Logo"/>
            </CHeaderBrand>

            <CHeaderNav className="d-md-down-none mx-auto">
                <CHeaderNavItem className="px-3" >
                    <CHeaderNavLink to="/dashboard">SCHEDULE</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem  className="px-3">
                    <CHeaderNavLink to="/users">ACCOUNT SETTINGS</CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink>APP CONFIGURATION</CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>

            <CHeaderNav className="px-3">
                <TheHeaderDropdown/>
            </CHeaderNav>
        </CHeader>
    )
}

export default TheHeader
