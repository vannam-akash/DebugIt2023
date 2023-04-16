import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function DeleteButton({ item }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
    
  const handleDelete = async () => {
    setShowModal(false);
    console.log("Deleting item with item id: ",item._id);
    try {
        const res = await axios.delete(`http://localhost:5000/items/${item._id}`)
        const deletedItem = res.data;
        console.log(deletedItem);
        navigate('/items');
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="ms-2">
      <Button
        variant="danger"
        onClick={() => setShowModal(true)}
        disabled={!item._id}
      >
        Delete Item
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteButton;
