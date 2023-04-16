import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function SelectInput(props) {
  const [category, setCategory] = useState('');

  const handleSelectChange = (e) => {
    setCategory(e.target.value);
    props.onCategoryChange(e.target.value);
  };

  return (
    <Form.Select  
    value={category}
      onChange={handleSelectChange}
    required
    >
      <option value="" disabled>Select a Category</option>
      <option value="Documents">Documents</option>
      <option value="Currency">Currency</option>
      <option value="Electronics">Electronics</option>
      <option value="Sports Item">Sports Item</option>
      <option value="Stationery">Stationery</option>
      <option value="Vehicles">Vehicles</option>
      <option value="Personal belongings">Personal belongings</option>
      <option value="Miscellaneous">Miscellaneous</option>
    </Form.Select>
  );
}

export default SelectInput;