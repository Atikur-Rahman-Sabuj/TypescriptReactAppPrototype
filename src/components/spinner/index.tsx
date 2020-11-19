import React from "react";
import { Spinner } from "react-bootstrap";
export default function SpinnerLocal() {
   return (
      <div className="spinner-container">
         <Spinner animation="border" variant="info" />
      </div>
   );
}
