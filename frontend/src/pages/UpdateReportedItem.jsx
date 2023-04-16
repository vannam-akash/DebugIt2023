import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import SelectInput from "../components/SelectInput";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function UpdateReportedItem() {
  const uId = localStorage.getItem("userId");
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [category, setCategory] = useState(null);
  const [desc, setDesc] = useState("");
  const [foundDate, setFoundDate] = useState("");
  const [foundLocation, setFoundLocation] = useState("");
  const navigate = useNavigate();

  const fetchItem = async () => {
    try {
      
      const res = await axios.get(`http://localhost:5000/items/${id}`);
      const item = res.data;
      setItem(item);
      setCategory(item.category);
      setDesc(item.desc);
      setFoundDate(item.foundDate);
      setFoundLocation(item.foundLocation);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItem();
  },[]);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = {category, desc,foundDate,foundLocation};

    try {
      const res = await axios.put(`http://localhost:5000/items/${item._id}`, formData);
      const editedItem = res.data;
      navigate(`/items/${editedItem._id}`)
    } catch (err) {
      console.error(err);
    }
  } 

  return <>
  <h2 className="text-center mt-5 text-decoration-underline">Edit Item: {item.desc}</h2>
  <Form onSubmit={handleSubmit} className=" card container w-50 mt-3 black" >
    <Form.Group controlId="category" className="mt-3">
      <Form.Label>Category</Form.Label>
      <SelectInput
      required
      onCategoryChange={handleCategoryChange}
      />
    </Form.Group>

    <Form.Group controlId="desc" className="mt-3">
      <Form.Label>Description</Form.Label>
      <Form.Control
      required
        as="textarea"
        rows={3}
        placeholder="Enter description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="foundDate" className="mt-3">
      <Form.Label>Found Date</Form.Label>
      <Form.Control
      required
        type="date"
        placeholder="Enter found date"
        value={foundDate}
        onChange={(e) => setFoundDate(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="foundLocation" className="mt-3">
      <Form.Label>Found Location</Form.Label>
      <Form.Control
      required
      type="text"
        placeholder="Enter found location"
        value={foundLocation}
        onChange={(e) => setFoundLocation(e.target.value)}
      />
    </Form.Group>

    <Button variant="success" type="submit" className="my-3 w-25" >
      Submit
    </Button>
  </Form>
  </>;
}

export default UpdateReportedItem;
