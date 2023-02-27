import React, { useState } from 'react';
import verified from "../../../assets/icon/verified.png";
import emailVerify from "../../../assets/icon/verifyEmail.png";
import AuthenticationFormHeaderText from './AuthenticationFormHeaderText';
import HeaderCompanyLogo from './HeaderCompanyLogo';
import UserAuthenticationButtonText from './UserAuthenticationButtonText';

export default function UserEmailVerificationFormLayout() {
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  // const [passwordError, setPasswordError] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    // perform email validation and set error message if invalid
    if (!event.target.value.includes('@')) {
      setEmailError('Invalid email')
    } else {
      setEmailError('')
    }
  }

  // const handlePasswordChange = (event) => {
 
  //   // perform password validation and set error message if invalid
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
  //   const isValidPassword = passwordRegex.test(event.target.value);

  //   setPassword(event.target.value);

  //   if (!isValidPassword) {
  //     setPasswordError(
  //       "Password must contain at least 8 characters including at least one uppercase letter (A-Z), one lowercase letter (a-z), and one number (0-9)"
  //     );
  //   } else {
  //     setPasswordError('');
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    // perform form submission if inputs are valid
    if (emailError === '') {
      console.log('Form submitted')
    }
  }
  return (
    <>
    <body className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <HeaderCompanyLogo/>
            <div className="mt-12 flex flex-col items-center">
            <img  src={emailVerify} width="60px" height="60px" alt=""/>
      
            <br/>
      
                <AuthenticationFormHeaderText headerText="Email Verification" />
                <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <br/>
               
                  <form onSubmit={handleSubmit}>
                    
    
                <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              
            />
        {emailError !== '' && <p className="text-rose-600 text-sm mt-2 animate-pulse">{emailError}</p>}
            {/* <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
            /> */}
               
             <button
              className="  mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-300 hover:text-gray-100-700 drop-shadow-2xl transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            type='submit'
            >
         
            
              <img src={verified}  width="30px" height="30px" alt=""/>

          
              <UserAuthenticationButtonText authButtonText="Verify" />
            </button>
            </form>

            {/* <UserOptionalAuthHeadline optionalAuthHeadlineText="Or login with" />
            <div className="flex items-center justify-center space-x-4 mt-3">
                <UserOptionalLoginAuth />
            </div>
            <UserAuthPrivacyText appName="app Name" termsOfServiceRedirectLink="/users/services"  policyRedirectLink="/users/policy" />
            <br/>
            <UserSignUpRedirectionText redirectionLink="/users/signup" redirectionText="Sign up" redirectionHeadline="Don't have an account ?"
             />
            */}


                </div> 
                </div>
            </div>
        </div>
        {/* <UserLoginFormSideImage  /> */}

    </body>
    </>
  )
}