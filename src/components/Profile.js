import React from 'react'
import './Profile.css'

const PROFILE_SIZE = 200;

function Profile() {
    return (
        <img width={`${PROFILE_SIZE}px`} height={`${PROFILE_SIZE}px`} className="profile" src={process.env.PUBLIC_URL + "/img/profile.jpg"} alt="Profile Icon" />
    )
}

export default Profile
