import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className="profile bg-light">
      <img className="round-img" src={avatar} alt="" />
      <div>
        <h2>{name}</h2>
        <p>
          <MDBIcon icon="briefcase" /> {status}{" "}
          {company && <span> at {company}</span>}
        </p>
        <p className="my-1">
          {" "}
          <MDBIcon icon="map-marked" /> {location && <span>{location}</span>}
        </p>
        <Link to={`profile/user/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill[0].toUpperCase()}
            {skill.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
