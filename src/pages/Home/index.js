import React from "react";
import headerImg from "../../images/headerImg.png";
import "./index.css";

export default function Home() {
  return (
    <div>
      <div className="header-img">
        <img src={headerImg} alt="logo" style={{ width: "100%" }} />
      </div>
      <div className="First-block-text">
        <h1 style={{ textAlign: "center", marginTop: 20 }}>
          Wat is Friendly Games?
        </h1>
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: 600,
          }}
        >
          Friendly Games is een webpagina waar clubs uit amateur vereningingen
          elkaar kunnen benaderen voor een vriendschapelijke wedstrijd.
        </p>
      </div>
    </div>
  );
}
