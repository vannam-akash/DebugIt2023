import React from 'react';
import PropTypes from 'prop-types'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const CustomNavbar = ({onLoginClick, onReportItemClick }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand className='ml-3'>Lost and Found</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          {isLoggedIn ? (
            <Nav.Item>
              <Nav.Link as={Link} to="/report" onClick={onReportItemClick}>Report Item</Nav.Link>
            </Nav.Item>
          ) : null}
        </Nav>
        <Nav>
        {isLoggedIn ?
          <Button className='mr-3' variant="outline-light" onClick={onLoginClick}>
            Logout
          </Button>:
          <Button className='mr-3' variant="outline-light" onClick={onLoginClick}>
            Login
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
