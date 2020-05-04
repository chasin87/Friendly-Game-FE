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

      <div className="Matches-Container">
        <div className="Matches-Inline">
          <h1>Matches</h1>
          <table>
            <tr>
              <th>Home</th>
              <th>Away</th>
              <th>Date</th>
              <th>Time</th>
              <th>Side</th>
              <th>Match id</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>HYS</td>
              <td>DSK</td>
              <td>23-10-2020</td>
              <td>14:30:00</td>
              <td>Home</td>
              <td>1</td>
              <td>Open</td>
            </tr>
          </table>
          <button className="Accept-button">Accept</button>
          <button className="Reject-button">Reject</button>
        </div>
      </div>
    </div>
  );
}
