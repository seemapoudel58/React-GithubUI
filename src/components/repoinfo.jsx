import React from "react";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import "./repoinfo.css";
const RepoInfo = ({ repos }) => {
  const sortedRepos = repos
    ? [...repos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    : [];

  return (
    <div className="repo-info">
      <h2>Repositories</h2>
      <ul>
        {sortedRepos &&
          sortedRepos.map((repo, index) => (
            <li key={index}>
              <div>{repo.name}</div>
              <span>{repo.description}</span>
              <br />
              <article>

              <small>
                {repo.language}
                </small>
                <small>

                <FaStar /> {repo.stargazers_count}
                </small>
                <small>

                <FaCodeBranch /> {repo.forks_count}
                </small>
                <small>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> View Repo
                </a>
                </small>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RepoInfo;
