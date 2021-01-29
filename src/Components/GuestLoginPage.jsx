import React from "react";
import imgLogo from "./Images/universitylogo.jpg";
import { Container, Form, Button, Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const GuestLoginPage = () => {
  return (
    <div>
      <img
        src={imgLogo}
        alt="img"
        style={{
          width: "60px",
          height: "60px",
          marginTop: "30px",
          marginLeft: "600px",
        }}
      />
      <h2 style={{ textAlign: "center", color: "#586069" }}>Guest Login</h2>
      <Container>
        <Card style={{ height: "300px", width: "300px", marginLeft: "400px" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ marginLeft: "20px" }}>
                User Name or E-mail Address
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Signin
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};
