import React from 'react'
import loginLock from "../../../assets/icon/loginLock2.png"
export default function UserAuthenticationButtonText({authButtonText}) {
  return (
  <><img src={loginLock}  width="30px" height="30px" alt=""/> 
    <span className="ml-3"> {authButtonText} </span></>
  )
}
