import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ githubusername, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(githubusername);
  }, [getGithubRepos, githubusername]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {repos !== null
        ? repos.map(repo => (
            <div key={repo.id} className="edu bg-white p-1 my-1">
              <div style={{ maxWidth: "300px" }}>
                <p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </p>

                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">
                    Stars:<span>{repo.stargazers_count}</span>
                  </li>
                  <li className="badge badge-dark">
                    Watchers:<span>{repo.watchers_count}</span>
                  </li>
                  <li className="badge badge-light">
                    Forks:<span>{repo.forks_count}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))
        : "Not Found"}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  githubusername: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
