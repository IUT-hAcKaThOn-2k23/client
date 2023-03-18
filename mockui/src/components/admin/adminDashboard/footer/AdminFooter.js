import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminFooter() {
  return (
    // <!-- Footer Start -->
    <div className="container-fluid pt-4 px-4">
        <div className="bg-light rounded-top p-4">
            <div className="row">
                <div className="col-12 col-sm-6 text-center text-sm-start">
                    &copy; <NavLink to="#">Your Site Name</NavLink>, All Right Reserved. 
                </div>
                <div className="col-12 col-sm-6 text-center text-sm-end">
                  
                   
                </div>
            </div>
        </div>
    </div>
    // <!-- Footer End -->
  )
}
