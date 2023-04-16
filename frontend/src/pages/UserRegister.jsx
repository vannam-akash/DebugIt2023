import React, { useState } from "react";
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { Button, Card, Form } from "react-bootstrap";
import AuthContext from "../contexts/AuthContext/AuthContext";
import axios from "axios";

function UserRegister() {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate() ;

  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {name,rollNo,phoneNumber,email,password};
    console.log(formData);
    console.log("Submitting new user data....");
    const res = await axios.post(`http://localhost:5000/users/new`,formData);
    const newUser = res.data;
    console.log(newUser);
    handleLogin(newUser._id);
    navigate(`/users/${newUser._id}`);
  }

  return (
    <>
      <Card className="mx-auto mt-5" style={{ maxWidth: "500px" }}>
        <Card.Body shadow="lg">
          <h2 className="text-center mb-4 text-decoration-underline">
            User Register
          </h2>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mt-3" controlId="name">
              <Form.Label className="text-decoration-underline">
                <h6>Name:</h6>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mt-3 " controlId="rollNo">
              <Form.Label className="text-decoration-underline">
                <h6>Roll Number:</h6>
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your roll number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="phoneNumber">
              <Form.Label className="text-decoration-underline">
                <h6>Phone Number:</h6>
              </Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="email">
              <Form.Label className="text-decoration-underline">
                <h6>Email:</h6>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="password">
              <Form.Label className="text-decoration-underline">
                <h6>Password:</h6>
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>


            <Button className="mt-3 w-25" variant="success" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserRegister;
