import React from "react";
import imgLogo from "./Images/universitylogo.jpg";
import { Container } from "react-bootstrap";
export const GuestLoginPage = () => {
  return (
    <div>
      <Container>
        <img
          src={imgLogo}
          alt="img"
          style={{ width: "40px", height: "40px" }}
        />
        <h2>Guest Login</h2>
      </Container>
    </div>
  );
};
