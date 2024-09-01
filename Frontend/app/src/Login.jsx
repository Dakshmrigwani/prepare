import React from "react";
import {
  Tab,
  Tabs,
  Container,
  Form,
  Button,
} from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mx-auto">
        <Container className="mt-5">
          <Tab.Container defaultActiveKey="login">
            <Tabs
              defaultActiveKey="login"
              id="login-register-tabs"
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Login
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="register" title="Register">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group
                    controlId="formBasicConfirmPassword"
                    className="mt-3"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Register
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Tab.Container>
        </Container>
      </div>
    </>
  );
}
