import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityPage from './components/community/CommunityPage';
import LoginPage from './components/LoginPage';
import Header from "./Header";
import HomePage from "./HomePage";
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import MobilePage from './components/MobilePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
          <Route path="/mobile" element={<MobilePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
