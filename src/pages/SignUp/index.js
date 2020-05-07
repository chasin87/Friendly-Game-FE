import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [klasse, setKlasse] = useState("");
  const [request, setRequest] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, image, email, password, klasse, request));

    setEmail("");
    setPassword("");
    setName("");
    setKlasse("");
    setImage("");
    setRequest(0);
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Signup </h1>
      </div>
      <Container>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Team</Form.Label>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Enter your team name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage">
            <Form.Label>Club Logo</Form.Label>
            <Form.Control
              value={image}
              onChange={(event) => setImage(event.target.value)}
              type="input"
              placeholder="http://"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Division</Form.Label>
            <Form.Control
              value={klasse}
              onChange={(event) => setKlasse(event.target.value)}
              type="input"
              placeholder="Enter your division"
              required
            />
          </Form.Group>

          <Form.Group className="mt-5">
            <button className="button" type="submit" onClick={submitForm}>
              Sign up
            </button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </div>
  );
}
