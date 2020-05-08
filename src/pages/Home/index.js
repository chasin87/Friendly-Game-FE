import React, { useEffect } from "react";
import headerImg from "../../images/headerImg.png";
import { fetchConfGamesList } from "../../store/confirmedMatches/actions";
import { selectConfMatches } from "../../store/confirmedMatches/selectors";
import "./index.css";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const confMatches = useSelector(selectConfMatches);

  useEffect(() => {
    dispatch(fetchConfGamesList());
  }, [dispatch]);

  return confMatches.length ? (
    <div>
      <div className="header-img">
        <img src={headerImg} alt="logo" style={{ width: "100%" }} />
      </div>
      <div className="card-text-center">
        <div className="card-body">
          <h5 className="card-title">Wat is Friendly Games?</h5>
          <p className="card-text">
            {" "}
            Friendly Games is een webpagina waar clubs uit amateur vereningingen
            elkaar kunnen benaderen voor een vriendschapelijke wedstrijd.
          </p>
        </div>
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
    <div className="header-img">
      <img src={headerImg} alt="logo" style={{ width: "100%" }} />

      <div className="card-text-center">
        <div className="card-body">
          <h5 className="card-title">Wat is Friendly Games?</h5>
          <p className="card-text">
            {" "}
            Friendly Games is een webpagina waar clubs uit amateur vereningingen
            elkaar kunnen benaderen voor een vriendschapelijke wedstrijd.
          </p>
        </div>
      </div>
    </div>
  );
}
