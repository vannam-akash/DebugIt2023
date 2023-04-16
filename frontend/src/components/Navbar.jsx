import React from 'react';
// import logo1 from '../assets/logo2.jpg';
import PropTypes from 'prop-types'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = ({onLoginClick, onReportItemClick }) => {
  const uId  = localStorage.getItem('userId');
  const navigate = useNavigate();
  
  const onProfileClick = () => {
    if(uId)navigate(`/users/${uId}`)
  };

  const onRegisterClick = () => {
    navigate(`/users/new`)
  };
  
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand className='ml-3'>Lost&Found</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/items" >Reported Items</Nav.Link>
          </Nav.Item>
          {isLoggedIn ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/items/new" onClick={onReportItemClick}>Report Item</Nav.Link>
            </Nav.Item>
          ) : null}
        </Nav>
        <Nav>
        {isLoggedIn ?
          <Button className='mr-3' variant='success'  onClick={onProfileClick}>
            Profile
          </Button>:
          null
        }
        {isLoggedIn ?
          <Button className='mr-3' variant="success" onClick={onLoginClick}>
            Logout
          </Button>:
          <Button className='mr-3' variant="success" onClick={onLoginClick}>
            Login
          </Button>
        }
        {isLoggedIn ? null:
          <Button className='mr-3' variant="success" onClick={onRegisterClick}>
            Register
          </Button>
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  onReportItemClick: PropTypes.func,
};

CustomNavbar.defaultProps = {
  onLoginClick: ()=>{console.log("Clicked on login button")},
  onReportItemClick: () => {console.log("Clicked on Report item button")},
};

export default CustomNavbar;
