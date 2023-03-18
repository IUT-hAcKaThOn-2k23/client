import React from 'react'
import { NavLink } from 'react-router-dom'
import UserLogo from "../../../../assets/img/user.jpg"

export default function AdminSideBar() {
  return (
    <>
    {/* // <!-- Sidebar Start --> */}
    <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
            <NavLink to="index.html" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>AppName</h3>
            </NavLink>
            <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                    <img className="rounded-circle" src={UserLogo} alt="" style={{width: "40px", height:"40px"}}/>
                    <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div className="ms-3">
                    <h6 className="mb-0">Jhon Doe</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div className="navbar-nav w-100">
                <NavLink to="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                <div className="nav-item dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</NavLink>
                    <div className="dropdown-menu bg-transparent border-0">
                        <NavLink to="button.html" className="dropdown-item">Buttons</NavLink>
                        <NavLink to="typography.html" className="dropdown-item">Typography</NavLink>
                        <NavLink to="element.html" className="dropdown-item">Other Elements</NavLink>
                    </div>
                </div>
                <NavLink to="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</NavLink>
                <NavLink to="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</NavLink>
                <NavLink to="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</NavLink>
                <NavLink to="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</NavLink>
                <div className="nav-item dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</NavLink>
                    <div className="dropdown-menu bg-transparent border-0">
                        <NavLink to="signin.html" className="dropdown-item">Sign In</NavLink>
                        <NavLink to="signup.html" className="dropdown-item">Sign Up</NavLink>
                        <NavLink to="404.html" className="dropdown-item">404 Error</NavLink>
                        <NavLink to="blank.html" className="dropdown-item">Blank Page</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Sidebar End --> */}
    </>
  )
}
