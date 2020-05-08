import React, { useEffect } from "react";
import { fetchConfGamesList } from "../../store/confirmedMatches/actions";
import { selectConfMatches } from "../../store/confirmedMatches/selectors";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";

export default function ConfirmedPage() {
  const dispatch = useDispatch();
  const confMatches = useSelector(selectConfMatches);
  console.log("confmatches", confMatches);
  useEffect(() => {
    dispatch(fetchConfGamesList());
  }, [dispatch]);

  return confMatches.length ? (
    <div>
      <div className="Header-page">
        <h1>Confirmed Matches</h1>
      </div>

      <div className="match-list">
        {confMatches.map((confMatch) => (
          <div className="card">
            <Container key={confMatch.id} className="flex-container">
              <Container className="ContainerCard">
                <Container className="ContainerBox">
                  <label>Home Team</label>
                  <div className="TeamName">{confMatch.homeTeam}</div>
                </Container>

                <Container className="ContainerBox">
                  <label>Away Team</label>
                  <div className="TeamName">{confMatch.awayTeam}</div>
                </Container>

                <Container className="ContainerBox">
                  <label>Date</label>
                  <div className="Date">{confMatch.date}</div>
                </Container>

                <Container className="ContainerBox">
                  <label>Time</label>
                  <div className="Date">{confMatch.time}</div>
                </Container>

                <Container className="ContainerBox">
                  <label>Match Id:</label>
                  <div className="Place">{confMatch.matchId}</div>
                </Container>
              </Container>
            </Container>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="Header-page">
      <h1>Confirmed Matches</h1>
    </div>
  );
}
