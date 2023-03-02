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
  var hours = 1; // to clear the localStorage after 1 hour
  // (if someone want to clear after 8hrs simply change hours=8)
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
    localStorage.setItem('setupTime', now)
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear()
      localStorage.setItem('setupTime', now);
    }
  }
  return (

    <Router>
      <Routes>
        <Route path="/" element={<UserErrorPage />} />
        <Route path="/users/login" element={<UserLoginPage />} />

        <Route path="/users/signup" element={<UserSignUpPage />} />
        <Route path="/users/email-verification" element={<UserEmailVerificationFormPage />} />
        <Route path="/users/reset-password" element={<UserResetPasswordFormPage />} />
        <Route path="/users/OTP-verification/:email" element={<UserOTPVerificationFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
