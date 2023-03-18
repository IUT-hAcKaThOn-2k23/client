import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SaleChart() {
  return (
    // <!-- Sales Chart Start -->
    <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Worldwide Sales</h6>
                        <NavLink to="">Show All</NavLink>
                    </div>
                    <canvas id="worldwide-sales"></canvas>
                </div>
            </div>
            <div className="col-sm-12 col-xl-6">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Salse & Revenue</h6>
                        <NavLink to="">Show All</NavLink>
                    </div>
                    <canvas id="salse-revenue"></canvas>
                </div>
            </div>
        </div>
    </div>
    // <!-- Sales Chart End -->
  )
}
