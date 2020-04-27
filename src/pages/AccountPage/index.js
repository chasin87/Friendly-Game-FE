import React from "react";
import { useSelector } from "react-redux";
import { selectTeams } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";

import HYS from "../../images/HYS.png";
import "./index.css";

export default function AccountPage() {
  console.log(selectTeams);

  const { token, name, email, klasse, logo } = useSelector(selectUser);
  const history = useHistory();
  if (token === null) {
    history.push("/");
  }
  if (name === null) {
    return <Loading />;
  }
  return (
    <div>
      <div className="Header-page">
        <h1>Account Page</h1>
      </div>

      <div className="Account-Container">
        <img
          src={logo}
          alt="logo"
          style={{ width: 130, marginTop: 10, marginBottom: 10 }}
        />
        <h1>{name}</h1>
        <a href="mailto:hys@hys.com?Subject=Friendly%20Game" target="_top">
          {email}
        </a>
        <p>{klasse}</p>
      </div>

      {/* <TeamCard id={id} name={name} email={email} ranking={ranking} /> */}
    </div>
  );
}
