import React from 'react'
import userLoginSideImage from "../../../assets/img/fooder.jpg"
export default function UserLoginFormSideImage() {
  return (
    <div className="flex-1 bg-indigo-100 text-center  lg:flex ">
    <div
      className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
      
    >

        <img src={userLoginSideImage} style={{height:"100%"}} alt=""/>
    </div>
   

  </div>
  )
}
