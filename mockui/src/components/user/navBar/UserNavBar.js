import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeImage from '../home/HomeImage'
export default function UserNavBar() {
  return (

    <nav className="flex justify-between items-center text-sm mb-4 w-90 sm:static sm:w-full">
    <NavLink to="">
      <NavLink>
        <HomeImage  />
      </NavLink>
    </NavLink>
    <div className="flex items-center gap-8">
      <NavLink className="border-b-2 border-purple-500 py-2 px-4 hidden sm:inline-block">Templates</NavLink>
      <NavLink className="border-b-2 border-purple-500 py-2 px-4 hidden sm:inline-block">Recommendations</NavLink>
      <NavLink className="border-b-2 border-purple-500 py-2 px-4 hidden sm:inline-block">About</NavLink>
    </div>
  </nav>
  )
}
