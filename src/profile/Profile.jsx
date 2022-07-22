import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(props);
  const handleClick = (e) => {
    e.preventDefault();
    props.showName(props.name);
  };

  return (
    <div className="blog_post">
      <div className="img_pod"> {props.children}</div>
      <div className="container_copy">
        <h1>Profile</h1>
        <div className="Name">
          <a href="#!" onClick={handleClick}>
            <h3>Name :</h3>
            {props.name}
          </a>
        </div>

        <h2>Profession :</h2>
        {props.profession}

        <p>
          <h3>Bio :</h3>
          {props.bio}
        </p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  showName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  name: "Default name",
  profession: "enter profession",
  bio: "enter bio",
  showName: "default",
};

export default Profile;
