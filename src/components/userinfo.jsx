import React from "react";
import { FaUserFriends } from "react-icons/fa";
import "./userinfo.css";

const UserInfo = ({ userData }) => {
  // console.log('UserData in UserInfo:', userData);
  const { login, name, bio, avatar_url, followers, following } = userData;

  return (
    <div className="user-info">
      <img src={avatar_url} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <span>({login}) </span>
      <section>
        <p>{bio || "No Bio Provided"}</p>
      </section>
      <section>
        <ul>
          <li>
            <FaUserFriends /> {followers} followers
          </li>
          <li>
            <FaUserFriends />
            {following} following
          </li>
        </ul>
      </section>
    </div>
  );
};
export default UserInfo;
