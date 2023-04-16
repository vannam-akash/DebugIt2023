import React from "react";
import { Card } from "react-bootstrap";


function UserCard({user}) {

  return <>
  <Card
          key={user._id}
          className="container mt-3 w-50"
          bg="dark"
          text="light"
        >
          <Card.Body>
            <Card.Title className="mt-2">
              <u>Profile:</u>
            </Card.Title>
            <Card.Text className="mt-3">
              <u>Name:</u> {user.name}
            </Card.Text>
            <Card.Text className="mt-2">
              <u>Phone Number:</u> {user.phoneNumber}
            </Card.Text>
            <Card.Text className="mt-2">
              <u>Email Id:</u> {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
  </>;
}

export default UserCard;
