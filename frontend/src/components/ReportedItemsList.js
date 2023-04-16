import React, { useState, useEffect } from 'react';
import ReportedItem from './ReportedItemCard';
import axios from 'axios';

const ReportedItemsList = () => {
  const [reportedItems, setReportedItems] = useState([]);

  useEffect(() => {
    const fetchReportedItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/items');
        setReportedItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReportedItems();
  }, []);

  return (
    <div>
      <h2 className='text-center mt-5 text-decoration-underline'>Reported Items</h2>
      {reportedItems.map((item) => (
        <ReportedItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ReportedItemsList;
