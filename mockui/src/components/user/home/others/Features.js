import React from 'react'
import HomeImage from '../HomeImage'

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-start md:flex-row md:items-stretch md:justify-center md:gap-12 md:mt-8">
    <div className="flex flex-col items-center justify-start text-center md:flex-1 md:items-stretch md:justify-center md:text-left">
      <HomeImage  />
      <h2 className="text-purple-600 text-center md:text-left text-lg font-bold mt-4">No signup/signin</h2>
      <p className="text-sm text-gray-700 mt-2">
        Completely free and open source. No registration required. We do not store any of your
        information. Create unlimited resumes using our tool.
      </p>
    </div>
    <div className="flex flex-col items-center justify-start text-center md:flex-1 md:items-stretch md:justify-center md:text-left">
      <HomeImage  />
      <h2 className="text-purple-600 text-center md:text-left text-lg font-bold mt-4">Build in minutes</h2>
      <p className="text-sm text-gray-700 mt-2">
        With the powerful editor and wide range of professinal/job ready templates, you can build
        your resume within a matter few clicks & key strokes.
      </p>
    </div>
    <div className="flex flex-col items-center justify-start text-center md:flex-1 md:items-stretch md:justify-center md:text-left">
      <HomeImage />
      <h2 className="text-purple-600 text-center md:text-left text-lg font-bold mt-4">Fit for your needs</h2>
      <p className="text-sm text-gray-700 mt-2">
        If you are a developer, customize the template which suits your data and all you need to
        know is some basic knowledge of React and programming.
      </p>
    </div>
  </div>
  )
}
