import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommunityPage from './components/CommunityPage';
import LoginPage from './components/LoginPage';
import Header from "./Header";
import HomePage from "./HomePage";
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import MobilePage from './components/MobilePage';
import PrivateRoute from './PrivateRoute';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<PrivateRoute><CommunityPage /></PrivateRoute>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
          <Route path="/mobile" element={<PrivateRoute><MobilePage /></PrivateRoute>}></Route>
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
