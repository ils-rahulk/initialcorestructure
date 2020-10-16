import React from 'react';
import { CRow, CCard, CCol, CButton } from '@coreui/react'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { resourses, eventDetails } from './constant';
const Scheduler = () => {
    return (
        <>
            <CCard>
                <CRow>

                    <CCol sm="6">
                        <h4 className="tabsHeading">Schedule</h4>
                    </CCol>
                    <CCol sm="6" className="text-sm-right">
                        <CButton onClick={ () => console.log('click') } color="primary" className="px-4">Today 08/08/21</CButton>
                    </CCol>
                </CRow>
            </CCard>
            <FullCalendar
                plugins={ [ resourceTimelinePlugin  ] }
                initialView="resourceTimeline"
                resources= { resourses }
                events={ eventDetails }
                resourceLabelDidMount= { (renderInfo) => {
                    renderInfo.el.style.backgroundColor = 'blue';
                    renderInfo.el.style.color = 'white';
                    // renderInfo.el.innerHTML =  renderInfo.el.innerText;
                } }
            />
        </>
    )
}

export default Scheduler
