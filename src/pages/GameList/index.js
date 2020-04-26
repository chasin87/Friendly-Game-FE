import React, { useState, useSelector } from "react";
import Container from "react-bootstrap/Container";
import "./index.css";
// import { selectUser } from "../../store/user/selectors";

export default function GameList() {
  // const { name, id } = useSelector(selectUser);
  const [alert, setAlert] = useState(0);

  function add() {
    setAlert(alert + 1);
    console.log(`Name whant's a friendly game againts your team `);
  }

  return (
    <div>
      <div className="Header-page">
        <h1>Game list</h1>
      </div>
      <Container className="flex-container">
        <Container className="ContainerCard">
          <Container className="ContainerBox">
            <label>Team Name</label>
            <div className="TeamName">Fc Soccer</div>
          </Container>

          <Container className="ContainerBox">
            <label>Date</label>
            <div className="Date">22-10-2020</div>
          </Container>

          <Container className="ContainerBox">
            <label>Time</label>
            <div className="Date">14:00</div>
          </Container>

          <Container className="ContainerBox">
            <label>Place</label>
            <div className="Place">Home</div>
          </Container>

          <button onClick={add} className="button">
            Send request
          </button>

          <br />
          <label>{alert}</label>
        </Container>
      </Container>
    </div>
  );
}
