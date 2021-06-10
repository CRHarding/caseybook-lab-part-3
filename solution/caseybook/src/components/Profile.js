import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>{props.data.username}</p>
      <img src={props.data.image} alt="user" />
      <p>{props.data.about}</p>
    </div>
  )
}

export default Profile;
