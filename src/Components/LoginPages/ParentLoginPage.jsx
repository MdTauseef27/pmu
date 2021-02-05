import React from "react";
import imgLogo from "../Images/universitylogo.jpg";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  NavLink,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const ParentLoginPage = () => {
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
      <h2 style={{ textAlign: "center", color: "#586069" }}>Parent Login</h2>

      <Card
        style={{
          height: "300px",
          width: "300px",
          marginLeft: "500px",
          backgroundColor: "#EFF0F1",
        }}
      >
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email id"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col>
                  <NavLink style={{ fontSize: "10px" }}>
                    Forgot Password?
                  </NavLink>
                </Col>
              </Row>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                style={{ boxShadow: "none" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Accept Terms & Conditions"
                style={{ fontSize: "12px" }}
              />
            </Form.Group>
            <Button
              variant="outline-secondary"
              type="submit"
              style={{
                marginLeft: "45px",
                backgroundColor: "#EFF0F1",
                color: "black",
                textAlign: "center",
                boxShadow: "none",
              }}
            >
              Sign in with Google
            </Button>
            <Button
              variant="outline-secondary"
              type="submit"
              style={{
                marginTop: "10px",
                marginLeft: "38px",
                backgroundColor: "#EFF0F1",
                color: "black",
                textAlign: "center",
                boxShadow: "none",
              }}
            >
              Sign in with Facebook
            </Button>
          </Form>
        </Container>
      </Card>
    </div>
  );
};
