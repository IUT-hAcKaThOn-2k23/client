import React from 'react'
import { NavLink } from 'react-router-dom'
import UserLogo from "../../../../assets/img/user.jpg"

export default function AdminNavBar() {
  return (

    <>
 <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <NavLink to="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                </NavLink>
                <NavLink to="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </NavLink>
           
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search"/>
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <NavLink to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={UserLogo} alt="" style={{width: "40px", height: "40px"}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={UserLogo} alt="" style={{width: "40px", height: "40px"}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={UserLogo} alt="" style={{width: "40px", height: "40px"}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item text-center">See all message</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <NavLink to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </NavLink>
                            <hr className="dropdown-divider"/>
                            <NavLink to="#" className="dropdown-item text-center">See all notifications</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src={UserLogo} alt="" style={{width: "40px", height:" 40px"}}/>
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <NavLink to="#" className="dropdown-item">My Profile</NavLink>
                            <NavLink to="#" className="dropdown-item">Settings</NavLink>
                            <NavLink to="#" className="dropdown-item">Log Out</NavLink>
                        </div>
                    </div>
                </div>
                </nav>
            {/* <!-- Navbar End --> */}
            <hr/>
            </>
 
  )
}
