import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectMatches } from "../../store/gameList/selectors";
import { fetchGamesList } from "../../store/gameList/actions";
import Container from "react-bootstrap/Container";
import { requestUpdate } from "../../store/matchRequests/actions";
import "./index.css";

export default function GameList() {
  const { token, name, id } = useSelector(selectUser);

  const dispatch = useDispatch();
  const Matches = useSelector(selectMatches);

  useEffect(() => {
    dispatch(fetchGamesList());
  }, [dispatch]);

  function add(matchName, matchDate, matchTime, matchUserId, matchId, matchID) {
    if (token === null) {
      alert("Please login to use this function");
    } else {
      dispatch(
        requestUpdate(
          matchName,
          name,
          matchDate,
          matchTime,
          matchUserId,
          matchId,
          matchID
        )
      );
    }
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Match list</h1>
      </div>{" "}
      <div className="match-list">
        {Matches.map((match) => {
          if (match.name === name) {
            return (
              <div className="card">
                <Container key={match.id} className="flex-container">
                  <Container className="ContainerCard">
                    <Container className="ContainerBox">
                      <label>Team Name</label>
                      <div className="TeamName">{match.name}</div>
                    </Container>
                    <div></div>

                    <Container className="ContainerBox">
                      <label>Date</label>
                      <div className="Date">{match.date}</div>
                    </Container>

                    <Container className="ContainerBox">
                      <label>Time</label>
                      <div className="Date">{match.time}</div>
                    </Container>

                    <Container className="ContainerBox">
                      <label>User Id:</label>
                      <div className="Place">{match.userId}</div>
                    </Container>

                    <Container className="ContainerBox">
                      <label>Match Id:</label>
                      <div className="Place">{match.matchId}</div>
                    </Container>

                    <p style={{ fontWeight: 600 }}>This is your own match</p>

                    <br />
                  </Container>
                </Container>
              </div>
            );
          } else {
            return (
              <div className="card">
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
                      <label>User Id:</label>
                      <div className="Place">{match.userId}</div>
                    </Container>

                    <Container className="ContainerBox">
                      <label>Match Id:</label>
                      <div className="Place">{match.matchId}</div>
                    </Container>
                    {}
                    {token ? (
                      <button
                        className="button"
                        onClick={() => {
                          add(
                            match.name,
                            match.date,
                            match.time,
                            match.userId,
                            id,
                            match.matchId
                          );
                        }}
                      >
                        Send request
                      </button>
                    ) : (
                      <p style={{ fontWeight: 600 }}>
                        Please login to send a request
                      </p>
                    )}
                    <br />
                  </Container>
                </Container>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
