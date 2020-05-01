import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";

import "./index.css";

export default function AccountPage() {
  const { token, name, email, klasse, image } = useSelector(selectUser);
  console.log(image);
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
          src={image}
          alt="logo"
          style={{ width: 130, marginTop: 10, marginBottom: 10 }}
        />
        <h1>{name}</h1>
        <a href="mailto:hys@hys.com?Subject=Friendly%20Game" target="_top">
          {email}
        </a>
        <p>{klasse}</p>
      </div>
    </div>
  );
}
