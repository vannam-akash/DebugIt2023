import React from "react";
import { Card } from "react-bootstrap";

function FinderDetails({item}) {
  return <div>
    <Card
          key={item.finder._id}
          className="container mt-3 w-50"
          bg="dark"
          text="light"
        >
          <Card.Body>
            <Card.Title className="mt-2">
              <u>Finder Details:</u>
            </Card.Title>
            <Card.Text className="mt-3">
              <u>Name:</u> {item.finder.name}
            </Card.Text>
            <Card.Text className="mt-2">
              <u>Phone Number:</u> {item.finder.phoneNumber}
            </Card.Text>
            <Card.Text className="mt-2">
              <u>Email Id:</u> {item.finder.email}
            </Card.Text>
          </Card.Body>
        </Card>
  </div>;
}

export default FinderDetails;
