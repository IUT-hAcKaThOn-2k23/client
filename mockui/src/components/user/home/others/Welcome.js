import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImage from '../HomeImage'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
      <div className="text-center lg:text-left lg:w-1/2">
        <h3 className="mb-2 text-gray-500">Free & Open source</h3>
        <h1 className="text-2xl lg:text-3xl mb-6 text-center lg:text-left">
          Single Page <br />
          Resume Builder
        </h1>
        <div className="flex justify-center lg:justify-start">
          <NavLink to="">
            <NavLink className="bg-purple-600 text-white rounded-md py-2 px-4 text-sm lg:text-base">Get Started</NavLink>
          </NavLink>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <HomeImage  />
      </div>
    </div>
  )
}
