// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserErrorPage from "./pages//user/UserErrorPage";
import UserLoginPage from "./pages/user/UserLoginPage";
import UserSignUpPage from "./pages/user/UserSignUpPage";
function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<UserErrorPage />} />
      <Route path="/users/login" element={<UserLoginPage />} />
      <Route path="/users/signup" element={<UserSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
