import React, { useState, useEffect } from "react";
import "./index.css";

import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMatch } from "../../store/createMatch/actions";

import { fetchGamesList } from "../../store/gameList/actions";

export default function CreateGame() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");

  useEffect(() => {
    dispatch(fetchGamesList());
  }, [dispatch]);

  function submitMatchForm(event) {
    event.preventDefault();

    dispatch(addMatch(date, time));

    setDate("");
    setTime("10:00");
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Create Game</h1>
      </div>

      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <Form.Group controlId="formBasicDate">
          <Form.Label>Choose your match date</Form.Label>
          <Form.Control
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="Date"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicTime">
          <Form.Label>Choose your match time</Form.Label>
          <Form.Control
            value={time}
            onChange={(event) => setTime(event.target.value)}
            type="time"
            required
          />
        </Form.Group>
        <button className="button" type="submit" onClick={submitMatchForm}>
          Create Match
        </button>
      </Form>
    </div>
  );
}
