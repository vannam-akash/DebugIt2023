import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateBtn({item}) {
  const navigate = useNavigate();
  const renderUpdateForm = async()=>{
    navigate(`/items/${item._id}/edit`)
  }

  return <div className="ms-5">
  <Button variant="info" onClick={renderUpdateForm} >Update Item</Button>
  </div>;
}

export default UpdateBtn;
