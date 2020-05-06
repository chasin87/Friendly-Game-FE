import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { fetchRequestList } from "../../store/matchRequestById/actions";
import { selectRequests } from "../../store/matchRequestById/selectors";

import { selectMatches } from "../../store/gameList/selectors";
import { fetchGamesList } from "../../store/gameList/actions";

import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function AccountPage() {
  const dispatch = useDispatch();

  const request = useSelector(selectRequests);

  const { token, name, email, klasse, image, id } = useSelector(selectUser);
  const Matches = useSelector(selectMatches);

  useEffect(() => {
    dispatch(fetchGamesList(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchRequestList(id));
  }, [dispatch, id]);

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
          <h1> Requested Matches</h1>
          {request.map((reqs) => {
            return (
              <div>
                <table>
                  <tr>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>User id Home</th>
                    <th>User id Away</th>
                    <th>Match id</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>{reqs.homeTeam}</td>
                    <td>{reqs.awayTeam}</td>
                    <td>{reqs.date}</td>
                    <td>{reqs.time}</td>
                    <td>{reqs.userIdHome}</td>
                    <td>{reqs.userIdAway}</td>
                    <td>{reqs.matchId}</td>
                    <td>Open</td>
                  </tr>
                </table>

                <button className="Accept-button">Accept</button>
                <button className="Reject-button">Reject</button>
              </div>
            );
          })}
        </div>
        <div className="Matches-Inline">
          <h1> Created Matches</h1>
          {Matches.map((match) => {
            if (match.userId === id) {
              return (
                <div>
                  <table>
                    <tr>
                      <th>Home</th>
                      <th>Away</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>User id Home</th>
                      <th>User id Away</th>
                      <th>Match id</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>{match.name}</td>
                      <td>-</td>
                      <td>{match.date}</td>
                      <td>{match.time}</td>
                      <td>{match.userId}</td>
                      <td>-</td>
                      <td>{match.matchId}</td>
                      <td>Open</td>
                    </tr>
                  </table>
                  <br />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
