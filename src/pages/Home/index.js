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
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Wat is Friendly Games?</h5>
            <p className="card-text">
              {" "}
              Friendly Games is een webpagina waar clubs uit amateur
              vereningingen elkaar kunnen benaderen voor een vriendschapelijke
              wedstrijd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
