import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: {
    school,
    degree,
    location,
    current,
    to,
    from,
    description,
    fieldofstudy
  }
}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{from}</Moment> -{" "}
        {current ? (
          "Now"
        ) : (
          <span>
            <Moment format="DD/MM/YYYY">{to}</Moment>
          </span>
        )}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      {location && (
        <p>
          <strong>Location: </strong>
          {location}
        </p>
      )}
      {/* {location && (
        <p>
          <strong>Field of study: </strong>
          {fieldofstudy}
        </p>
      )} */}
      {description && (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
