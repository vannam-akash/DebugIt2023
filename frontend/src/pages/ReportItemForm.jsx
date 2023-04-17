import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SelectInput from "../components/SelectInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";


function ReportItemForm() {
  const uId = localStorage.getItem("userId");
  const [category, setCategory] = useState();
  const [desc, setDesc] = useState("");
  const [imgs, setImgs] = useState([]);
  const [foundDate, setFoundDate] = useState("");
  const [foundLocation, setFoundLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = {category, desc,foundDate,foundLocation,imgs,finder:uId};

    try {
      const res = await axios.post('http://localhost:5000/items/new', formData);
      const newItem = res.data;
      console.log(newItem);
      navigate(`/items/${newItem._id}`)
    } catch (err) {
      console.error(err);
    }
    
    // console.log(formData);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <>
    <Form onSubmit={handleSubmit} className=" card container w-50 mt-5 border border-dark" encType="multipart/form-data">
      <h2 className="text-center mt-4 text-decoration-underline">Report Item:</h2>
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

      <Form.Group controlId="img" className="mt-3" multiple>
        <Form.Label>Image:</Form.Label>
        <UploadWidget setImgs={setImgs} imgs={imgs}/>
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
    </>
  );
}

export default ReportItemForm;
