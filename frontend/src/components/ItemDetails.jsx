import React from "react";
import { Card } from "react-bootstrap";

function ItemDetails({item}) {
  return <div>
    <Card
        key={item._id}
        className="container mt-3 w-50"
        // style={};
        bg="dark"
        text="light"
      >
        <Card.Body>
          <Card.Title className="mt-2">
            <u>Item Details:</u>
          </Card.Title>
          <Card.Text className="mt-3">
            <u>Item Category:</u> {item.category}
          </Card.Text>
          <Card.Text className="mt-2">
            <u>Description:</u> {item.desc}
          </Card.Text>
          <Card.Text className="mt-2">
            <u>Found On:</u> {item.foundDate}
          </Card.Text>
          <Card.Text className="mt-2">
            <u>Found At:</u> {item.foundLocation}
          </Card.Text>
        </Card.Body>
      </Card>
  </div>;
}

export default ItemDetails;
