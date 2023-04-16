import './App.css';
import { useContext } from 'react';
import { Route, Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserLoginForm from "./pages/UserLoginForm";
import Home from "./pages/Home";
import AuthContext from './contexts/AuthContext/AuthContext';
import NotFound from './pages/NotFound';
import ReportedItem from './pages/ReportedItem';
import Footer from './components/Footer'
import ReportedItems from './pages/ReportedItems';
import ReportItemsForm from './pages/ReportItemForm';


function App() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  function onReportItemClick(e) {
    e.preventDefault();
    navigate('/items/new')
  }

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
    <div id='pageContainer'>
      <Navbar
        id="myNav"
        onLoginClick={onLoginClick}
        onReportItemClick={onReportItemClick}
        />
      <div id='content'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/items" element={<ReportedItems />} />
        <Route  exact path="/items/new" element={<ReportItemsForm />} />
        <Route exact path="/users/login" element={<UserLoginForm />} />
        <Route  exact path="/items/:id" element={<ReportedItem />} />
        <Route  exact path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer id='footer'/>
    </div>
  );
    
}

export default App;