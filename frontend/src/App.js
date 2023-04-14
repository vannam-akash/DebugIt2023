import './App.css';
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserLoginForm from "./components/UserLoginForm";
// import AuthProvider from "./contexts/AuthContext/AuthProvider";
import Home from "./components/Home";
import AuthContext from './contexts/AuthContext/AuthContext';
import NotFound from './components/NotFound';


function App() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  function onLoginClick(e) {
    e.preventDefault();
    if(isLoggedIn){
      handleLogout();
    }
    else{
      navigate('/users/login')
    }
  }
  return (
    <>
    {/* <AuthProvider> */}
      <Navbar
        onLoginClick={onLoginClick}
      />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact path="/users/login" element={<UserLoginForm />} />
        <Route  exact path="/*" element={<NotFound />} />
      </Routes>
    {/* </AuthProvider> */}
    </>
  );
    
}

export default App;
