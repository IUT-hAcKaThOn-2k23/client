// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserLoginFormLayout from "./components/user/userAuthenticationSection/UserLoginFormLayout";
import AddBookFormLayout from "./components/user/crud/AddBookFormLayout";
import BookListLayout from "./components/user/crud/BookListLayout";
import UserEmailVerificationFormPage from "./pages/user/UserEmailVerificationFormPage";
import UserHomePage from "./pages/user/UserHomePage";
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
        <Route path="/" element={<UserHomePage />} />
        <Route path="/users/login" element={<UserLoginPage />} />
        <Route path="/users/signup" element={<UserSignUpPage />} />
        <Route path="/users/email-verification" element={<UserEmailVerificationFormPage />} />
        <Route path="/users/reset-password" element={<UserResetPasswordFormPage />} />
        <Route path="/users/OTP-verification/:email" element={<UserOTPVerificationFormPage />} />
        <Route path="/bookList" element={<BookListLayout />} />
      <Route path="/addBook" element={<AddBookFormLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
