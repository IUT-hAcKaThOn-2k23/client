import React from 'react'
import signupFormSideImage from "../../../assets/img/signup8.jpg"
export default function UserSignUpFormSideImage() {
  return (
    <div className="flex-1 bg-white text-center  lg:flex ">
    <div
      className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
      
    >

        <img src={signupFormSideImage} style={{height:"80%"}} alt=""/>
        {/* <img src={signupFormSideImage} alt=""/> */}
    </div>
   

  </div>
  )
}
