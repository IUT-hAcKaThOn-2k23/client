import React from 'react'
import UserNavBar from '../navBar/UserNavBar'
import Features from './others/Features'
import Welcome from './others/Welcome'

export default function UserHomeLayout() {
  return (
    <main className="px-5 md:px-0 max-w-screen-lg mx-auto">
    <UserNavBar />
    <Welcome />
    <Features />
  </main>
  )
}
