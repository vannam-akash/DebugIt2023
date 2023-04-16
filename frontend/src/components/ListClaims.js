import React from "react";
import ListClaim from "./ListClaim";

function ListClaims({item}) {
  return <>
        <h3 className="text-center mt-5"><u>Claims:</u></h3>    
          {item.claims?
            item.claims.map((user)=>{ return <ListClaim key={user._id} user={user} />})
          :
          null
          }
  </>;
}

export default ListClaims;
