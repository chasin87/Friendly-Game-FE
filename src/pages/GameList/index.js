import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import { selectMatches } from "../../store/gameList/selectors";
import { fetchGamesList } from "../../store/gameList/actions";
import Container from "react-bootstrap/Container";
import { updateRequest } from "../../store/gameList/actions";
import "./index.css";

export default function GameList() {
  const { token, name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const Matches = useSelector(selectMatches);
  const [request, setRequest] = useState(0);

  useEffect(() => {
    dispatch(fetchGamesList());
  }, [dispatch]);

  function add() {
    if (token === null) {
      console.log("Please login to use this function");
    } else {
      setRequest(request + 1);
      console.log(`Name whant's a friendly game againts your team `);
      dispatch(updateRequest(request));
    }
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Game list</h1>
      </div>{" "}
      {Matches.map((match) => {
        if (match.name === name) {
          return (
            <Container key={match.id} className="flex-container">
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
                  <div className="Place">{match.matchId}</div>
                </Container>

                <p>This is your own match</p>

                <br />
                <label>Requests send for friendly match</label>
                <br />
                <label>{match.request}</label>
              </Container>
            </Container>
          );
        } else {
          return (
            <Container key={match.id} className="flex-container">
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
                  <div className="Place">{match.matchId}</div>
                </Container>

                <button onClick={add} className="button">
                  Send request
                </button>

                <br />
                <br />
                <label>Requests send for friendly match</label>
                <br />
                <label>{request}</label>
              </Container>
            </Container>
          );
        }
      })}
    </div>
  );
}
