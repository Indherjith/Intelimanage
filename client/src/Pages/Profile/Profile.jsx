import React, { useEffect } from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector(store=>store.reducer.curuser);
    console.log(user);
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img src="https://picsum.photos/200/200" alt="Your Profile" />
        </div>
        <div className="profile-info">
          <h1>Name : {user.name}</h1>
          <p>{user.designation}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
