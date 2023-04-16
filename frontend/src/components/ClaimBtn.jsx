import React from "react";
import { Button } from "react-bootstrap";

function ClaimBtn({handleOwnership}) {
  return (
    <>
      <Button id="claimBtn" onClick={handleOwnership} variant="success">
        Claim Ownership
      </Button>
    </>
  );
}

export default ClaimBtn;
