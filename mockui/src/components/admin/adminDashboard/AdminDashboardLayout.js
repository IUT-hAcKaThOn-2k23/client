import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../../styles/admin/dashboard/bootstrap.min.css"
import "../../../styles/admin/dashboard/style.css"
import AdminFooter from './footer/AdminFooter'
import AdminNavBar from './navBar/AdminNavBar'
import RecentSaleChart from './others/RecentSaleChart'
import SaleChart from './others/SaleChart'
import SaleRevenue from './others/SaleRevenue'
import WidgetsChart from './others/WidgetsChart'
import AdminSideBar from './sideBar/AdminSideBar'

export default function AdminDashboardLayout() {
  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
    <AdminSideBar />
    <div className="content">
   
    <AdminNavBar />
    <SaleRevenue />
    <SaleChart />
    <RecentSaleChart />
    <WidgetsChart/>
    <AdminFooter/>

    </div>
  <NavLink href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></NavLink>
    </div>
  )
}
