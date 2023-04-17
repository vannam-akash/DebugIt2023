import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetails from "../components/ItemDetails";
import FinderDetails from "../components/FinderDetails";
import ListClaims from "../components/ListClaims";
import ClaimBtn from "../components/ClaimBtn";
import DeleteButton from "../components/DeleteItemBtn";
import UpdateBtn from "../components/UpdateBtn";

function ReportedItem() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const uId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const fetchItem = async () => {
    // if(uId!=item.finder._id) {
    //   console.log("Your are not ")
    // }
    try {
      
      const res = await axios.get(`https://lostandfoundbackend-8xry.onrender.com/items/${id}`);
      setItem(res.data);
      // console.log("This is the set item",item)
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(()=>{
    // console.log(item);
      console.log("This is the set item",item)
    
  },[item])

  function handleOwnership() {
    async function setClaim() {
      try {
        const res = await axios.put(
          `https://lostandfoundbackend-8xry.onrender.com/items/${id}/claims/${uId}`
        );
        navigate(`/items/${id}`);
        console.log("navigated");
      } catch (err) {
        console.error(err);
      }
    }
    setClaim();
  }
  
  useEffect(() => {
    // if (item.claims)
    //   ids = item.claims.map((user) => {
    //     return user._id;
    //   });
    // if (ids) {
    //   for (const id of ids) {
    //     if(id == uId)console.log("matched");
    //   }
    // }
    console.log("");
    fetchItem();
  },[]);
  
  return (
    <>
      {item.finder?<ItemDetails item={item}> </ItemDetails>:null}
      {item.finder ? <FinderDetails item={item}></FinderDetails> : null}
      {/* {ids && item.finder ? (
        (item.claims.includes(uId) || item.finder) == uId ? null : (
          )
          ) : null} */}
          <div className="text-center mt-4 d-flex justify-content-center align-items-center">
          <ClaimBtn  handleOwnership={handleOwnership} />
          {item.finder?uId==item.finder._id?<DeleteButton item={item} />:null:null}
          {item.finder?uId==item.finder._id?<UpdateBtn item={item} />:null:null}
          </div>

      <ListClaims item={item}/>
    </>
  );
}

export default ReportedItem;
