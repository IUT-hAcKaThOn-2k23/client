// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserErrorPage from "./pages//user/UserErrorPage";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 className="text-3xl font-bold underline text-red-400">
    //       Hello world!
    //     </h1>
    //   </header>
    // </div>
    <Router>
      <Routes>
      <Route path="/" element={<UserErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
