import React from 'react'

export default function UserSignUpRedirectionSection({redirectionHeadline,redirectionLink,redirectionText}) {
  return (
    <p className="mt-6 text-xs text-gray-600 text-center">
   {redirectionHeadline}
    <a href={redirectionLink} className="border-b border-gray-500 text-blue-600 border-dotted text-lg">
      &nbsp;{redirectionText}
    </a>
   
  </p>
  )
}
