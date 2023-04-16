import { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AuthContext from '../contexts/AuthContext/AuthContext';

const UserLogin = () => {
  const { handleLogin } = useContext(AuthContext);
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { rollNo, password };

    try {
      const res = await axios.post('http://localhost:5000/users/login', formData);
      const user = res.data;
      if(user=={}) console.log("User not found!!")
      else {
        handleLogin(user._id);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '500px' }}>
      <Card.Body shadow="lg">
        <h2 className="text-center mb-4 text-decoration-underline"> User Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mt-3 ' controlId="rollNo">
            <Form.Label className='text-decoration-underline'><h6>Roll Number:</h6></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your roll number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mt-3' controlId="password">
            <Form.Label className='text-decoration-underline'><h6>Password:</h6></Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className='mt-3' variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UserLogin;
