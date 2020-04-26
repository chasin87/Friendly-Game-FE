import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";

export default function GameList() {
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
          <button className="button">Send request</button>
        </Container>
      </Container>
    </div>
  );
}
