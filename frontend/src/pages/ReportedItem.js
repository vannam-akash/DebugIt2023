import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../components/ItemDetails";
import FinderDetails from "../components/FinderDetails";
import ListClaims from "../components/ListClaims";
import ClaimBtn from "../components/ClaimBtn";

function ReportedItem() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const uId = localStorage.getItem("userId");
  let ids;

  function handleOwnership() {
    async function setClaim() {
      try {
        const res = await axios.put(
          `http://localhost:5000/items/${id}/claims/${uId}`
        );
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    setClaim();
  }

  useEffect(() => {
    if (item.claims)
      ids = item.claims.map((user) => {
        return user._id;
      });
    if (ids) {
      for (const id of ids) {
        if(id == uId)console.log("matched");
      }
    }
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/items/${id}`);
        setItem(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    console.log("");
    fetchItem();
  },[]);
  
  return (
    <>
      <ItemDetails item={item}> </ItemDetails>
      {item.finder ? <FinderDetails item={item}></FinderDetails> : null}
      {/* {ids && item.finder ? (
        (item.claims.includes(uId) || item.finder) == uId ? null : (
          )
          ) : null} */}
          <ClaimBtn handleOwnership={handleOwnership} />
      <ListClaims item={item}></ListClaims>
    </>
  );
}

export default ReportedItem;
