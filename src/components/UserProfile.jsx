import React from "react";

const UserProfile = ({  name, age, location }) => {
  return (
    <div className="user">
      <h2 className="user__name">{name}</h2>
      <p className="user__age user__details">Age : {age}</p>
      <p className="user__location user__details">Location : {location}</p>
    </div>
  );
};

export default UserProfile;
