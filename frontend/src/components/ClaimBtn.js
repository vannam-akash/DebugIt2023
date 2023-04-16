import React from "react";
import { Button } from "react-bootstrap";

function ClaimBtn({handleOwnership}) {
  return (
    <div className="text-center mt-5">
      <Button id="claimBtn" onClick={handleOwnership} variant="success">
        Claim ownership
      </Button>
    </div>
  );
}

export default ClaimBtn;
