import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectMatches } from "../../store/gameList/selectors";
import { fetchGamesList } from "../../store/gameList/actions";
import Container from "react-bootstrap/Container";
import "./index.css";

export default function GameList() {
  const dispatch = useDispatch();
  const Matches = useSelector(selectMatches);
  console.log(selectMatches);
  const [alert, setAlert] = useState(0);

  useEffect(() => {
    dispatch(fetchGamesList());
  }, [dispatch]);

  function add() {
    setAlert(alert + 1);
    console.log(`Name whant's a friendly game againts your team `);
  }
  ///////////////////////ga verder met game list / matches laten zien
  return (
    <div>
      <div className="Header-page">
        <h1>Game list</h1>
      </div>{" "}
      {Matches.map((match) => {
        return (
          <Container className="flex-container">
            <Container className="ContainerCard">
              <Container className="ContainerBox">
                <label>Team Name</label>
                <div className="TeamName">{match.name}</div>
              </Container>

              <Container className="ContainerBox">
                <label>Date</label>
                <div className="Date">{match.date}</div>
              </Container>

              <Container className="ContainerBox">
                <label>Time</label>
                <div className="Date">{match.time}</div>
              </Container>

              <Container className="ContainerBox">
                <label>Place</label>
                <div className="Place">{match.side}</div>
              </Container>

              <Container className="ContainerBox">
                <label>Match Id:</label>
                <div className="Place">{match.id}</div>
              </Container>

              <button onClick={add} className="button">
                Send request
              </button>

              <br />
              <label>{match.id}</label>
            </Container>
          </Container>
        );
      })}
    </div>
  );
}
