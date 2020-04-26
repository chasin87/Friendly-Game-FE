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
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [division, setDivision] = useState("");
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

    dispatch(signUp(team, image, email, password, division));

    setEmail("");
    setPassword("");
    setTeam("");
    setDivision("");
    setImage("");
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Signup </h1>
      </div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicName">
            <Form.Label>Team</Form.Label>
            <Form.Control
              value={team}
              onChange={(event) => setTeam(event.target.value)}
              type="text"
              placeholder="Fc Soccer zat 1"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicImage">
            <Form.Label>Club Logo</Form.Label>
            <Form.Control
              value={image}
              onChange={(event) => setImage(event.target.value)}
              type="file"
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
              placeholder="Enter email"
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
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Klasse</Form.Label>
            <Form.Control
              value={division}
              onChange={(event) => setDivision(event.target.value)}
              type="number"
              placeholder="bijv. 2e klasse"
              required
            />
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </div>
  );
}
