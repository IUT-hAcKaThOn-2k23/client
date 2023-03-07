// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserLoginFormLayout from "./components/user/userAuthenticationSection/UserLoginFormLayout";
import UserErrorPage from "./pages//user/UserErrorPage";
import UserEmailVerificationFormPage from "./pages/user/UserEmailVerificationFormPage";
import UserLoginPage from "./pages/user/UserLoginPage";
import UserOTPVerificationFormPage from "./pages/user/UserOTPVerificationFormPage";
import UserResetPasswordFormPage from "./pages/user/UserResetPasswordFormPage";
import UserSignUpPage from "./pages/user/UserSignUpPage";
function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<UserErrorPage />} />
      <Route path="/users/login" element={<UserLoginPage />} />

      <Route path="/users/signup" element={<UserSignUpPage />} />
      <Route path="/users/email-verification" element={<UserEmailVerificationFormPage />} />
      <Route path="/users/reset-password" element={<UserResetPasswordFormPage />} />
      <Route path="/users/OTP-verification" element={<UserOTPVerificationFormPage />} />
      <Route path="*" element={<UserErrorPage />}/>

      </Routes>
    </Router>
  );
}

export default App;
