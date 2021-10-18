import React from 'react'
import ServiceList from './ServiceList/ServiceList'
import SidebarContact from './SidebarContact/SidebarContact'

function Sidebar({ servicesListData }) {
    return (
        <div>
            <ServiceList servicesListData={servicesListData} />
            <SidebarContact />
        </div>
    )
}

export default Sidebar

