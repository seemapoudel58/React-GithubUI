import React, { useEffect, useState } from "react";
import { fetchUserData, fetchUserRepositories } from "../API/github";
import UserInfo from "./userinfo";
import RepoInfo from "./repoinfo";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const [error, setError] = useState("");
  const username = "seemapoudel58";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData(username);
        // console.log('User Data:', userData);
        const userRepos = await fetchUserRepositories(username);
        setUserData(userData);
        setUserRepos(userRepos);
      } catch (error) {
        setError("Failed to fetch user data");
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }
  if (!userRepos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      {userData && <UserInfo userData={userData} />}

      {userRepos && <RepoInfo repos={userRepos} />}
    </div>
  );
};

export default UserProfile;
